'use strict';

const { ProductoSchema, PRODUCTO_TABLE } = require('../models/productoModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTO_TABLE, ProductoSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCTO_TABLE);
  }
};
