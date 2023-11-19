'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');
const { USUARIO_TABLE } = require('./usuarioModel');

const RESERVA_TABLE = 'reservas';

const ReservaSchema = {
  idReserva: {
    field: 'id_reserva',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  idUsuario: {
    field: 'id_usuario',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: USUARIO_TABLE,
      key: 'id_usuario'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fechaReserva: {
    field: 'fecha_reserva',
    allowNull: false,
    type: DataTypes.DATE,
  },
  estadoReserva: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'estado_reserva',
    defaultValue: 'pendiente',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  // total: {
  //   type: DataTypes.VIRTUAL,
  //   get() {
  //     if (this.reservas_productos && this.reservas_productos.length > 0) {
  //       return this.reservas_productos.reduce((total, item) => {
  //         return total + (item.precioProducto * item.ReservaProducto.cantidadReserva);
  //       }, 0);
  //     }
  //     return 0;
  //   }
  // }

};

class Reserva extends Model {
  static associate(models) {
    // Relación muchos a uno con usuario
    this.belongsTo(models.Usuario, {
      as: 'reservas_usuario',
    });
    // Relación muchos a muchos con Productos
    this.belongsToMany(models.Producto, {
      as: 'reservas_productos',
      through: models.ReservaProducto,
      foreignKey: 'idReserva',
      otherKey: 'idProducto'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVA_TABLE,
      modelName: 'Reserva',
      timestamps: false,
    };
  }
}

module.exports = { RESERVA_TABLE, ReservaSchema, Reserva };

    // Si la relacion fuera one to one o one to many
    // this.belongsTo(models.Usuario, {
    //   as: 'usuario'
    // });
