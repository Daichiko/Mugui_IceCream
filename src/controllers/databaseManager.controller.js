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
        // Conéctate a la base de datos
        // await client.connect();

        // Realiza la consulta SQL
        res = await pool.query(query);
    } catch (err) {
        console.log(err);
        throw err;
    } 
    //finally {
    //     // Cierra la conexión a la base de datos
    //     await client.end();
    // }

    return res.rows;
};

module.exports = dbManager;


// const DatabaseManager {
//     client = new Client({
//             user: 'fl0user',
//             host: 'ep-damp-darkness-a5yv6tsu.us-east-2.aws.neon.fl0.io',
//             database: 'Mugui',
//             password: 'QyzuP2seJUZ8',
//             port: 5432,
//             ssl: {
//                 rejectUnauthorized: false
//             }
//         });
//     }

//     async consulta(query) {
//         let res;
//         try {
//             // Conéctate a la base de datos
//             await this.client.connect();

//             // Realiza la consulta SQL
//             res = await this.client.query(query);
//         } catch (err) {
//             throw err;
//         } finally {
//             // Cierra la conexión a la base de datos
//             await this.client.end();
//         }

//         return res.rows;
//     }
// }

module.exports = dbManager;
