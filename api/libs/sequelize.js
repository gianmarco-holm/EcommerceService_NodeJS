const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

// Para hacerla mas segura se envia las variables de entorno como URI en lugar de una a una
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (msg) => console.log(`Custom logging: ${msg}`),
});

module.exports = sequelize;
