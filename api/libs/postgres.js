// Esta conección es si no tienes pool de conecciones, actualmente no se usa en esta app
const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'holm',
  password: '18199218',
  database: 'glamourLink'
});

await client.connect();
return client;
}

module.exports = getConnection;
