'use strict';

const { UsuarioSchema, USUARIO_TABLE } = require('../models/usuarioModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USUARIO_TABLE);
  }
};
