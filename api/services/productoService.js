// const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");
const { models } = require('./../libs/sequelize');

class ProductoService {

  constructor(){
  }

  async create(data) {
    try {
      return await models.Producto.create(data);
    } catch (error) {
      throw boom.badImplementation('Error al crear producto', error);
    }
  }

  // async find() {
  //   try {
  //     const data = await models.Producto.findAll();
  //     return data;
  //   } catch (error) {
  //     throw boom.badImplementation('Error al encontrar productos', error);
  //   }
  // }

  async find(query) {
    const options = {
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }
    const { precioProducto } = query;
    if (precioProducto) {
      options.where.precioProducto = precioProducto;
    }
    const { precioProducto_min, precioProducto_max } = query;
    if (precioProducto_min && precioProducto_max) {
      options.where.precioProducto = {
        [Op.gte]: precioProducto_min,
        [Op.lte]: precioProducto_max,
      };
    }
    const productos = await models.Producto.findAll(options);
    return productos;
  }

  async findOne(idProducto) {
    const producto = await models.Producto.findByPk(idProducto)
    if (!producto) {
      throw boom.notFound('Producto no encontrado');
    }
    return producto;
  }

  async update(idProducto, cambios) {
    const producto = await this.findOne(idProducto);
    return await producto.update(cambios);
  }

  async delete(idProducto) {
    const producto = await this.findOne(idProducto);
    await producto.destroy();
    return { idProducto };
  }
}

module.exports = ProductoService;

// constructor(){
//   this.productos = [];
//   this.generate();
// }

// generate() {
//   const limit = 20;
//   const categorias = ['producto', 'servicio']; // Lista de categorías posibles
//   for (let index = 0; index < limit; index++) {
//     this.productos.push({
//       idProducto: faker.string.uuid(),
//       nombreProducto: faker.commerce.productName(),
//       precioProducto: faker.commerce.price({ min: 50, max: 200 }),
//       descripcionProducto: faker.commerce.productDescription(),
//       stockProducto: faker.number.int({ min: 10, max: 100 }),
//       imagenProducto: faker.image.urlLoremFlickr(640, 480, 'hair'),
//       categoriaProducto: faker.helpers.arrayElement(categorias),
//     });
//   }
// }

//Manejo de error sin async
// async update(id, changes) {
//   const index = this.productos.findIndex(item => item.id ===id);
//   if (index === -1) {
//     throw new Error('product not found');
//   }
//   const product = this.productos[index];
//   this.productos[index] = {
//     ...product,
//     ...changes
//   };
//   return this.productos[index];
// }

// find antiguo
// find() {
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=> {
//       resolve(this.productos);
//     }, 5000);
//   })
//   this.productos;
// }

// Generate antiguo
// generate() {
//   const limit = 20;
//   for (let index = 0; index < limit; index++) {
//     this.productos.push({
//       id: faker.datatype.uuid(),
//       name: faker.commerce.productName(),
//       price: parseInt(faker.commerce.price(),10),
//       image: faker.image.imageUrl(),
//       isBlock: faker.datatype.boolean(),
//     })
//   }
// }
