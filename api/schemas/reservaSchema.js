const Joi = require('joi');

const idReserva = Joi.string().uuid();
const idUsuario = Joi.string().uuid(); // ID del usuario que realiza la reserva
const idProducto = Joi.string().uuid(); // ID del producto reservado
const fechaReserva = Joi.date().iso(); // Fecha y hora de la reserva en formato ISO "2023-10-30T14:30:00"
const estadoReserva = Joi.string().valid('pendiente', 'confirmada', 'cancelada', 'recogida'); // Estados posibles
const cantidadReserva = Joi.number().integer().min(1); // Cantidad de productos reservados
// const nombreUsuario = Joi.string();
// const apellidoUsuario = Joi.string();

const createReservaSchema = Joi.object({
  // Si la relación de usuario reserva fuera 1 a 1 se quitaria el idusuario
  // y se colocaria la tabla usuario
  // usuario : Joi.object({
  //   nombreUsuario: nombreUsuario.require(),
  //   apellidousuario: apellidousuario.require(),
  // }),
  idUsuario: idUsuario.required(),
  fechaReserva: fechaReserva.required(),
  estadoReserva: estadoReserva,
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

const agregarElementoSchema = Joi.object({
  idReserva: idReserva.required(),
  idProducto: idProducto.required(),
  cantidadReserva: cantidadReserva.required(),
});

module.exports = {
  createReservaSchema,
  updateReservaSchema,
  getReservaSchema,
  deleteReservaSchema,
  agregarElementoSchema
};
