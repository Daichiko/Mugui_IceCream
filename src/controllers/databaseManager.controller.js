// Primero, instala el módulo pg con npm install pg
const { Pool } = require('pg');

const pool = new Pool({
    user: 'fl0user',
    host: 'ep-damp-darkness-a5yv6tsu.us-east-2.aws.neon.fl0.io',
    database: 'Mugui',
    password: 'QyzuP2seJUZ8',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const dbManager = {};

dbManager.consulta = async function(query) {
    let res;
    try {
        res = await pool.query(query);
    } catch (err) {
        console.log(err);
        throw err;
    } 

    return res.rows;
};

dbManager.consultaByData = async function(query, data) {
    let res;
    try {
        res = await pool.query(query, data);
    } catch (err) {
        console.log(err);
        throw err;
    } 

    return res.rows;
}

module.exports = dbManager;
