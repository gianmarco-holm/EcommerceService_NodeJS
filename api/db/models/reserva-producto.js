'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');

const { RESERVA_TABLE } = require('./reservaModel');
const { PRODUCTO_TABLE } = require('./productoModel');

const RESERVA_PRODUCTO_TABLE = 'reservas_productos';

const ReservaProductoSchema =  {
  idReservaProducto: {
    field: 'id_reserva_producto',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idReserva: {
    field: 'id_reserva',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: RESERVA_TABLE,
      key: 'id_reserva'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idProducto: {
    field: 'id_producto',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: PRODUCTO_TABLE,
      key: 'id_producto'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  cantidadReserva: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'cantidad_reserva',
    validate: {
      min: 1
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class ReservaProducto extends Model {

  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVA_PRODUCTO_TABLE,
      modelName: 'ReservaProducto',
      timestamps: false
    }
  }
}

module.exports = { RESERVA_PRODUCTO_TABLE, ReservaProductoSchema, ReservaProducto };
