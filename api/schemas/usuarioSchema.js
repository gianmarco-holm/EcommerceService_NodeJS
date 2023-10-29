const Joi = require('joi');

const idUsuario = Joi.string().uuid();
const nombreUsuario = Joi.string().min(1).max(255);
const apellidoUsuario = Joi.string().min(1).max(255);
const correoUsuario = Joi.string().email();
const contraseniaUsuario = Joi.string().pattern(new RegExp('^.{8}$'));
const telefonoUsuario = Joi.string();
const direccionUsuario = Joi.string();

const createUsuarioSchema = Joi.object({
  nombreUsuario: nombreUsuario.required(),
  apellidoUsuario: apellidoUsuario.required(),
  correoUsuario: correoUsuario.required(),
  contraseniaUsuario: contraseniaUsuario.required(),
  telefonoUsuario: telefonoUsuario.required(),
  direccionUsuario: direccionUsuario.required(),
})

const updateUsuarioSchema = Joi.object({
  nombreUsuario: nombreUsuario,
  apellidoUsuario: apellidoUsuario,
  correoUsuario: correoUsuario,
  contraseniaUsuario: contraseniaUsuario,
  telefonoUsuario: telefonoUsuario,
  direccionUsuario: direccionUsuario,
})

const getUsuarioSchema = Joi.object({
  idUsuario: idUsuario.required(),
})

const deleteUsuarioSchema = Joi.object({
  idUsuario: idUsuario.required(),
})

module.exports = { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema, deleteUsuarioSchema }
