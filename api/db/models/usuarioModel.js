'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {
  idUsuario: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    field: 'id_usuario',
  },
  nombreUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'nombre_usuario',
  },
  apellidoUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'apellido_usuario',
  },
  correoUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'correo_usuario',
  },
  contraseniaUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'contrasenia_usuario',
  },
  telefonoUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'telefono_usuario',
  },
  direccionUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'direccion_usuario',
  },
  rol: {
    allowNull: false,
    type: DataTypes.ENUM('cliente', 'administrador', 'estilista', 'cajero'),
    defaultValue: 'cliente'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

class Usuario extends Model {
  static associate(models) {
    // Relación uno a muchos con reservas
    this.hasMany(models.Reserva, {
      as: 'usuario_reservas',
      foreignKey: 'idUsuario'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false,
    };
  }
}

module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };


    // si es una relación de 1 a 1
    // this.hasOne(models.Reserva, {
    //   as: 'customer',
    //   foreignKey: 'id_usuario'
    // });
    // this.hasMany(models.product, {
    //   as:'reservas',
    //   foreignKey: 'idProducto'
    // })

// const UserSchema = { id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataTypes.INTEGER
//   },
//   email: {
//     allowNull: false,
//     type: DataTypes.STRING,
//     unique: true,
//   },
//   password: {
//     allowNull: false,
//     type: DataTypes.STRING
//   },
//   createdAt: {
//     allowNull: false,
//     type: DataTypes.DATE,
//     field: 'create_at',
//     defaultValue: Sequelize.NOW
//   }
// }

// class User extends Model {
//   static associate() { }
//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: USER_TABLE,
//       modelName: 'User',
//       timestamps: false } }
// }

// module.exports = { USER_TABLE, UserSchema, User }
