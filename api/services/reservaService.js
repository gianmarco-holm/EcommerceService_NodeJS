// const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");
const { models } = require('./../libs/sequelize');

class ReservaService {

  constructor() {
  }

  async create(data) {
    try {
      return await models.Reserva.create(data);
    } catch (error) {
      throw boom.badImplementation('Error al crear la reserva', error);
    }
  }

  async addItem(data) {
    const { idReserva, idProducto, cantidadReserva } = data;
    // Validar si el producto existe
    const producto = await models.Producto.findByPk(idProducto);
    if (!producto) {
      throw boom.notFound('Producto no encontrado');
    }
    // Crear el elemento ReservaProducto
    const nuevoElemento = await models.ReservaProducto.create(data);
    return nuevoElemento;
  }

  // async find() {
  //   try {
  //     const data = await models.Reserva.findAll({include: 'reservas_usuario'});
  //     return data;
  //   } catch (error) {
  //     throw boom.badImplementation('Error al encontrar las reservas', error);
  //   }
  // }
  async find() {
    try {
      const data = await models.Reserva.findAll({
        include: [
          {
            model: models.Usuario,
            as: 'reservas_usuario',
            attributes: {
              exclude: ['createdAt', 'contraseniaUsuario']
            },
          },
          {
            model: models.Producto, // Reemplaza 'Producto' con el nombre real de tu modelo
            as: 'reservas_productos',
            //through: { attributes: [] }, // Para evitar que aparezcan las columnas de la tabla de unión
          },
        ],
        attributes: {
          exclude: ['createdAt'],
        },
      });
      return data;
    } catch (error) {
      throw boom.badImplementation('Error al encontrar las reservas', error);
    }
  }

  async findOne(idReserva) {
    const reserva = await models.Reserva.findByPk(idReserva, {
      include: [
        'reservas_usuario',
        'reservas_productos'
      ]
    })
    if (!reserva) {
      throw boom.notFound('Reserva no encontrada');
    }
    return reserva;
  }

  async update(idReserva, cambios) {
    const reserva = await this.findOne(idReserva);
    return await reserva.update(cambios);
  }

  async delete(idReserva) {
    const reserva = await this.findOne(idReserva);
    await reserva.destroy();
    return { idReserva };
  }
}

module.exports = ReservaService;

// Para enviar información junto con usuario
// async create(data) {
//   try {
//     const dataUsuario = await models.Usuario.create(data.usuario);
//     const dataReserva = await models.Reserva.create({
//       ...data,
//       idUsuario: dataUsuario.id
//     })
//     return await models.Reserva.create(data);
//   } catch (error) {
//     throw boom.badImplementation('Error al crear la reserva', error);
//   }
// }
// O
// async create(data) {
//   try {
//     return await models.Reserva.create(data, {
//   include: ['usuario']
// });
//   } catch (error) {
//     throw boom.badImplementation('Error al crear la reserva', error);
//   }
// }
//Para relacion uno a uno
// async find() {
//   try {
//     const data = await models.Reserva.findAll({
//       include: ['usuario']
//     });
//     return data;
//   } catch (error) {
//     throw boom.badImplementation('Error al encontrar las reservas', error);
//   }
// }
