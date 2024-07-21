const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

let pool = null;

if (isProduction) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    pool = new Pool({
        user: 'gubqcsxq',
        host: 'isabelle.db.elephantsql.com',
        database: 'gubqcsxq',
        password: '2mUagw83C77Soq4j0PyX5BBJtR-78kcX',
        port: 5432
    });
}

module.exports = { pool };
