const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");
// const getConnection = require('../libs/postgres');
// const pool = require('../libs/postgresPool');
const sequelize = require('../libs/sequelize');

class UsuarioService {

  constructor(){
    // this.usuarios = [];
    // this.generate();
    // this.pool = pool;
    // this.pool.on('error', (err) => console.error(err));
    this.sequelize = sequelize;
  }

  // generate() {
  //   const limit = 20;
  //   for (let index = 0; index < limit; index++) {
  //     const nombreUsuario = faker.person.firstName();
  //     const apellidoUsuario = faker.person.lastName();
  //     this.usuarios.push({
  //       idUsuario: faker.string.uuid(),
  //       nombreUsuario: nombreUsuario,
  //       apellidoUsuario: apellidoUsuario,
  //       correoUsuario: faker.internet.email({firstName:nombreUsuario, lastName: apellidoUsuario, provider:'montalvo.com'}),
  //       contraseniaUsuario: faker.internet.password({length:8, memorable:false}),
  //       telefonoUsuario: faker.phone.number(),
  //       direccionUsuario: faker.location.streetAddress(),
  //     })
  //   }
  // }

  async create(data){
    const nuevoUsuario = {
      id: faker.string.uuid(),
      ...data
    }
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  // Con ORM Sequelize para conexión
  async find() {
    try {
      const query = 'SELECT * FROM usuarios';
      // Puede retornar metadata tambien
      // const [data, metadata] = await this.sequelize.query(query);
      const [data] = await this.sequelize.query(query);
      return data;
    } catch (error) {
      throw boom.badImplementation('Se produjo un error al encontrar usuarios', error);
    }
  }

  // Codigo con pool de conexión
  // async find() {
  //   try {
  //     const query = 'SELECT * FROM usuarios';
  //     const usuarios = await this.pool.query(query);
  //     return usuarios.rows;
  //   } catch (error) {
  //     throw boom.badImplementation('Se produjo un error al encontrar usuarios');
  //   }
  // }

  // Codigo con conexión normal
  // async find() {
  //   try {
  //     const client = await getConnection();
  //     const usuarios = await client.query('SELECT * FROM usuarios');
  //     return usuarios.rows;
  //   } catch (error) {
  //     throw boom.badImplementation('Se produjo un error al encontrar usuarios');
  //   }
  // }

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

  async findByEmail(correoUsuario) {
    const usuario = this.usuarios.find(item => item.correoUsuario === correoUsuario);
    if (!usuario) {
      throw boom.notFound('Usuario no encontrado');
    }
    return usuario;
  }
}


module.exports = UsuarioService;
