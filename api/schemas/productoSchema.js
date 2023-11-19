// Validar la data con el cliente
// Luego se envía el esquema al middleware para que comience a validar

const Joi = require('joi');

const idProducto = Joi.string().uuid();
const nombreProducto = Joi.string();
const precioProducto = Joi.number().min(20).max(999).precision(2).positive();
const descripcionProducto = Joi.string();
const stockProducto = Joi.number().integer().min(10).max(1000).positive();
const imagenProducto = Joi.string().uri();
const categoriaProducto = Joi.string().valid('producto', 'servicio');

const precioProducto_min = Joi.number().integer();
const precioProducto_max = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductoSchema = Joi.object({
  nombreProducto: nombreProducto.required(),
  precioProducto: precioProducto.required(),
  descripcionProducto: descripcionProducto.required(),
  stockProducto: stockProducto.required(),
  imagenProducto: imagenProducto.required(),
  categoriaProducto: categoriaProducto.required(),
})

const updateProductoSchema = Joi.object({
  nombreProducto: nombreProducto,
  precioProducto: precioProducto,
  descripcionProducto: descripcionProducto,
  stockProducto: stockProducto,
  imagenProducto: imagenProducto,
  categoriaProducto: categoriaProducto,
})

const getProductoSchema = Joi.object({
  idProducto: idProducto.required(),
})

const deleteProductoSchema = Joi.object({
  idProducto: idProducto.required(),
})

const queryProductoSchema = Joi.object({
  limit,
  offset,
  precioProducto,
  precioProducto_min,
  precioProducto_max,
  // precioProducto_max: precioProducto_max.when('precioProducto_min', {
  //   is: Joi.number().integer(),
  //   then: Joi.required()
  // })
});

module.exports = {
  createProductoSchema,
  updateProductoSchema,
  getProductoSchema,
  deleteProductoSchema,
  queryProductoSchema
};
