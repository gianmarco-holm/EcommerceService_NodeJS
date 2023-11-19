'use strict';

const { ReservaSchema, RESERVA_TABLE } = require('../models/reservaModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(RESERVA_TABLE, ReservaSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(RESERVA_TABLE);
  }
};
