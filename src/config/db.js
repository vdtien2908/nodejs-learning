import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function connect() {
    try {
        const pool = mysql.createPool({
            host: process.env.HOST,
            user: process.env.DB_USERNAME,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
        });

        await pool.getConnection();
        console.log('Database connected successfully!');
        return pool;
    } catch (err) {
        console.log(err);
    }
}

export { connect };
