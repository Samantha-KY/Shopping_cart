// const Pool = require('pg').Pool;
import {Pool} from 'pg';
// const pool = new Pool({
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     host: process.env.HOST,
//     port: process.env.PORT
// })

const pool = new Pool.Pool({
    // 
    connectionString: process.env.DATABASE_URL,
    ssl: { 
        rejectUnauthorized: false 
    } 
})

module.exports = pool;