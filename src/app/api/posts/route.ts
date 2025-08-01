import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, user, content, category, create_time } = body;
        const client = await pool.connect()
        try {
            await client.query('BEGIN')

            const insertPostResult = await client.query(
                `INSERT INTO post (title, user_id, create_time, category)
                 VALUES ($1, $2, $3, $4)
                 RETURNING id`,
                [title, user, new Date(), category]
            )

            const post_id = insertPostResult.rows[0].id

            // 2. content 테이블에 데이터 삽입
            await client.query(
                `INSERT INTO content (post_id, content)
                 VALUES ($1, $2)`,
                [post_id, content]
            )

            await client.query('COMMIT')

            return NextResponse.json({ post_id }, { status: 201 })

        } catch (error) {
            await client.query('ROLLBACK')
            console.error('Transaction failed:', error)
            return NextResponse.json({ error: 'Transaction failed' }, { status: 500 })
        } finally {
            client.release()
        }

    } catch (error) {
        console.error('❌ 서버 에러:', error);
        return NextResponse.json({ message: '서버 에러 발생' }, { status: 500 });
    }
}