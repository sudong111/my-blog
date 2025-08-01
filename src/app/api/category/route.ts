import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET(req: NextRequest) {
    try {
        const client = await pool.connect()
        const result =
            await client.query(`
            SELECT * FROM category  
        `)
        client.release();
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('❌ Failed to fetch category:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}