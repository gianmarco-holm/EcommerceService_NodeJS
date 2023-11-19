'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCTO_TABLE = 'productos';

const ProductoSchema = {
  idProducto: {
    field: 'id_producto',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  nombreProducto: {
    field: 'nombre_producto',
    allowNull: false,
    type: DataTypes.STRING(255), // Establece la longitud máxima según tus necesidades
  },
  precioProducto: {
    field: 'precio_producto',
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2), // Números decimales con precisión de 10 dígitos y 2 decimales
  },
  descripcionProducto: {
    field: 'descripcion_producto',
    allowNull: false,
    type: DataTypes.STRING(1000), // Establece la longitud máxima según tus necesidades
  },
  stockProducto: {
    field: 'stock_producto',
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      min: 0, // Validación para números enteros positivos
    },
  },
  imagenProducto: {
    field: 'imagen_producto',
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
  },
  categoriaProducto: {
    field: 'categoria_producto',
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

class Producto extends Model {
  static associate(models) {
    // this.belongsToMany(models.Reserva, {
    //   as: 'productos_reservas',
    //   through: models.ReservaProducto,
    //   foreignKey: 'idProducto',
    //   otherKey: 'idReserva'
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'Producto',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCTO_TABLE, ProductoSchema, Producto };
