const Joi = require('joi');

const idReserva = Joi.string().uuid();
const idUsuario = Joi.string().uuid(); // ID del usuario que realiza la reserva
const idProducto = Joi.string().uuid(); // ID del producto reservado
const fechaReserva = Joi.date().iso(); // Fecha y hora de la reserva en formato ISO "2023-10-30T14:30:00"
const estadoReserva = Joi.string().valid('pendiente', 'confirmada', 'cancelada', 'recogida'); // Estados posibles
const cantidadReserva = Joi.number().integer().min(1); // Cantidad de productos reservados

const createReservaSchema = Joi.object({
  idUsuario: idUsuario.required(),
  idProducto: idProducto.required(),
  fechaReserva: fechaReserva.required(),
  estadoReserva: estadoReserva,
  cantidadReserva: cantidadReserva.required(),
});

const updateReservaSchema = Joi.object({
  estadoReserva: estadoReserva,
});

const getReservaSchema = Joi.object({
  idReserva: idReserva.required(),
});

const deleteReservaSchema = Joi.object({
  idReserva: idReserva.required(),
});

module.exports = { createReservaSchema, updateReservaSchema, getReservaSchema, deleteReservaSchema };
