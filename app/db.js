const Pool = require('pg').Pool;

console.log(`Prepare connection to postgres : ${process.env.POSTGRES_USER}@${process.env.DB_HOST}:${process.env.POSTGRES_PORT}`);

// Create a connection to the database
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

module.exports = pool;
