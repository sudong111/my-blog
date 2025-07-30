import { Pool } from 'pg'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export async function initDB() {
    // user
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                password TEXT NOT NULL,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL
            );
        `);
        console.log('✅ Users table checked/created')
    }
    catch (error) {
        console.error('❌ Failed to create users table:', error)
    }

    // post
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS post (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                user_id TEXT NOT NULL,
                create_time TIMESTAMP NOT NULL,
                category TEXT NOT NULL
            );
        `);
        console.log('✅ Post table checked/created')
    }
    catch (error) {
        console.error('❌ Failed to create post table:', error)
    }

    // content
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS content (
                post_id INTEGER PRIMARY KEY REFERENCES post(id) ON DELETE CASCADE,
                content TEXT NOT NULL
            );
        `);
        console.log('✅ Content table checked/created')
    }
    catch (error) {
        console.error('❌ Failed to create content table:', error)
    }
}

export default pool