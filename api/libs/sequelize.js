const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

// Para hacerla mas segura se envia las variables de entorno como URI en lugar de una a una
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (msg) => console.log(`Custom logging: ${msg}`),
});

setupModels(sequelize);

// Si se usa migraciones se deja de usar la sincronizacion aca y se usa en migraciones
// sequelize.sync();

module.exports = sequelize;
