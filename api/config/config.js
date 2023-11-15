// Para leer las variables del archivo .env necesitamos instalar
// npm i dotenv
// esto nos ayuda a cargar las variables de entorno a la configuración de node de package.json
// Recordar que implementar variables de entorno nos ayuda a no cargar datos sensibles a nuestro repositorio
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}

module.exports = { config };
