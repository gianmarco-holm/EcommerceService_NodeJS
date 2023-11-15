// Si se usa el ORM Sequelize esta libreria se dejaria de usar porque la orm sequelize ya la tiene
// Sirve para las pool de conexiones a la base de datos, es decir
// para volver a utilizar la misma conexión y no estar creando conexión tras conexión
const { Pool } = require('pg');
const { config } = require('../config/config');

// Para hacerla mas segura se envia las variables de entorno como URI en lugar de una a una
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

// Este codigo se usa cuando no se usa variable de entorno, pero, es insegura
//   const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'holm',
//   password: '18199218',
//   database: 'glamourLink'
// });


module.exports = pool;
