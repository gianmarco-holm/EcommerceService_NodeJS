// Validar la data con el cliente
// Luego se envía el esquema al middleware para que comience a validar

const Joi = require('joi');

const idProducto = Joi.string().uuid();
const nombreProducto = Joi.string();
const precioProducto = Joi.number().min(50).max(200).precision(10).positive();
const descripcionProducto = Joi.string();
const stockProducto = Joi.number().integer().min(10).max(100).positive();
const imagenProducto = Joi.string().uri();
const categoriaProducto = Joi.string().valid('producto', 'servicio');

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

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema, deleteProductoSchema }
