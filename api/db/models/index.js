const { Usuario, UsuarioSchema } = require('./usuarioModel');
const { Producto, ProductoSchema } = require('./productoModel');
const { Reserva, ReservaSchema } = require('./reservaModel');
const { ReservaProducto, ReservaProductoSchema } = require('./reserva-producto');

function setupModels(sequelize) {
  // Modelos
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Reserva.init(ReservaSchema, Reserva.config(sequelize));
  ReservaProducto.init(ReservaProductoSchema, ReservaProducto.config(sequelize));

  // Relaciones
  Usuario.associate(sequelize.models);
  Producto.associate(sequelize.models);
  Reserva.associate(sequelize.models);
}

module.exports = setupModels;

