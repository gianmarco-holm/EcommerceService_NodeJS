const { faker } = require("@faker-js/faker/locale/es_MX");
const boom = require("@hapi/boom");

class ReservaService {

  constructor() {
    this.reservas = [];
  }

  async create(data) {
    const nuevaReserva = {
      idReserva: faker.string.uuid(),
      ...data,
      estado: 'pendiente',
    };
    this.reservas.push(nuevaReserva);
    return nuevaReserva;
  }

  async find() {
    try {
      return this.reservas;
    } catch (error) {
      throw boom.badImplementation('Se produjo un error al encontrar reservas de productos');
    }
  }

  async findOne(idReserva) {
    const reserva = this.reservas.find(item => item.idReserva === idReserva);
    if (!reserva) {
      throw boom.notFound('Reserva no encontrada');
    }
    return reserva;
  }

  async update(idReserva, cambios) {
    const index = this.reservas.findIndex(item => item.idReserva === idReserva);
    if (index === -1) {
      throw boom.notFound('Reserva no encontrada');
    }
    const reserva = this.reservas[index];
    this.reservas[index] = {
      ...reserva,
      ...cambios
    };
    return this.reservas[index];
  }

  async delete(idReserva) {
    const index = this.reservas.findIndex(item => item.idReserva === idReserva);
    if (index === -1) {
      throw boom.notFound('Reserva no encontrada');
    }
    this.reservas.splice(index, 1);
    return { idReserva };
  }
}

module.exports = ReservaService;
