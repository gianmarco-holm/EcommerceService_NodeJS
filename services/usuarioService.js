const { faker } = require("@faker-js/faker/locale/es_MX");
const boom = require("@hapi/boom");

class UsuarioService {

  constructor(){
    this.usuarios = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      const nombreUsuario = faker.person.firstName();
      const apellidoUsuario = faker.person.lastName();
      this.usuarios.push({
        idUsuario: faker.string.uuid(),
        nombreUsuario: nombreUsuario,
        apellidoUsuario: apellidoUsuario,
        correoUsuario: faker.internet.email({firstName:nombreUsuario, lastName: apellidoUsuario, provider:'montalvo.com'}),
        contraseniaUsuario: faker.internet.password({length:8, memorable:false}),
        telefonoUsuario: faker.phone.number(),
        direccionUsuario: faker.location.streetAddress(),
      })
    }
  }

  async create(data){
    const nuevoUsuario = {
      id: faker.string.uuid(),
      ...data
    }
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  async find() {
    try {
      return this.usuarios;
    } catch (error) {
      throw boom.badImplementation('Se produjo un error al encontrar usuarios');
    }
  }

  async findOne(idUsuario) {
    const usuario = this.usuarios.find(item => item.idUsuario === idUsuario);
    if (!usuario) {
      throw boom.notFound('Usuario no encontrado');
    }
    return usuario;
  }

  async update(idUsuario, cambios) {
    const index = this.usuarios.findIndex(item => item.idUsuario === idUsuario);
    if (index === -1) {
      throw boom.notFound('usuario no encontrado');
    }
    const usuario = this.usuarios[index];
    this.usuarios[index] = {
      ...usuario,
      ...cambios
    };
    return this.usuarios[index];
  }

  async delete(idUsuario) {
    const index = this.usuarios.findIndex(item => item.idUsuario ===idUsuario);
    if (index === -1) {
      throw boom.notFound('usuario no encontrado');
    }
    this.usuarios.splice(index,1);
    return{ idUsuario };
  }
}

module.exports = UsuarioService;
