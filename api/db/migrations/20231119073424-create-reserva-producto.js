'use strict';

const { ReservaProductoSchema, RESERVA_PRODUCTO_TABLE } = require('../models/reserva-producto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(RESERVA_PRODUCTO_TABLE, ReservaProductoSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(RESERVA_PRODUCTO_TABLE);
  }
};
