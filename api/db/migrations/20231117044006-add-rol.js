'use strict';

const { query } = require('express');
//  npm run migrations:generate add-rol

const { UsuarioSchema, USUARIO_TABLE } = require('../models/usuarioModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USUARIO_TABLE, 'rol', UsuarioSchema.rol);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USUARIO_TABLE, 'rol');
  }
};


// PARA CAMBIO DE CARACTERISTICAS DE UNA COLUMNA
// 'use strict';
// const { DataTypes } = require('sequelize');

// const { CUSTOMER_TABLE } = require('./../models/customer.model');

// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
//       field: 'user_id',
//       allowNull: false,
//       type: DataTypes.INTEGER,
//       unique: true,
//     });
//   },

//   down: async (queryInterface) => {
//   }
// };
