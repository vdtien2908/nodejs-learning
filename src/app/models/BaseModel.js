import * as db from '../../config/db';

class BaseModel {
    constructor() {
        this.tableName = '';
    }

    async getAll(select = ['*'], orderBy = []) {
        const pool = await db.connect();
        // Handle option query
        const columns = select.join(',');
        const orderByString = orderBy.join('');
        let sql = `SELECT ${columns} FROM ${this.tableName} WHERE status = 1`;
        if (orderBy.length > 0) {
            sql += ` ORDER BY ${orderByString}`;
        }

        try {
            const [rows] = await pool.execute(sql);
            return Array.isArray(rows) ? rows : [];
        } catch (error) {
            console.error(`Error in getAll(): ${error.message}`);
            return [];
        }
    }

    async findById(id) {
        const pool = await db.connect();
        const sql = `SELECT * FROM ${this.tableName} WHERE id = ? AND status = 1`;
        try {
            const [rows] = await pool.execute(sql, [id]);
            return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
        } catch (error) {
            console.error(`Error in findByID(): ${error.message}`);
            return null;
        }
    }

    async findOne(fieldName, value) {
        const pool = await db.connect();
        const sql = `SELECT * FROM ${this.tableName} WHERE ${fieldName} = ? AND status = 1 LIMIT 1`;
        try {
            const [rows] = await pool.execute(sql, [value]);
            return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
        } catch (error) {
            console.error(`Error in findOne(): ${error.message}`);
            return null;
        }
    }

    async create(data) {
        const pool = await db.connect();
        const columns = Object.keys(data).join(',');
        const placeholders = Object.values(data)
            .map(() => '?')
            .join(',');
        const values = Object.values(data);
        const sql = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`;
        try {
            const [result] = await pool.execute(sql, values);
            return result.insertId;
        } catch (error) {
            console.error(`Error in create(): ${error.message}`);
            return null;
        }
    }

    async update(id, data) {
        const pool = await db.connect();
        let sql = `UPDATE ${this.tableName} SET `;
        let placeholders = [];
        let updates = [];
        for (const [key, value] of Object.entries(data)) {
            updates.push(`${key} = ?`);
            placeholders.push(value);
        }
        sql += updates.join(', ') + ` WHERE ID = ${id}`;
        try {
            const [result] = await pool.execute(sql, placeholders);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error in update(): ${error.message}`);
            return false;
        }
    }

    async delete(id) {
        const pool = await db.connect();
        const sql = `UPDATE ${this.tableName} SET status = 0 WHERE id = ${id}`;
        try {
            const [result] = await pool.execute(sql);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Error in delete(): ${error.message}`);
            return false;
        }
    }

    async query(sql, params = []) {
        const pool = await db.connect();
        try {
            const [rows] = await pool.execute(sql, params);
            return Array.isArray(rows) ? rows : [];
        } catch (error) {
            console.error(`Error in query(): ${error.message}`);
            return [];
        }
    }
}

module.exports = BaseModel;
