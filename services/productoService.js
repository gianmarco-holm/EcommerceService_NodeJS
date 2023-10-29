const { faker } = require("@faker-js/faker/locale/es_MX");
const boom = require("@hapi/boom");

class ProductoService {

  constructor(){
    this.productos = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    const categorias = ['producto', 'servicio']; // Lista de categorías posibles
    for (let index = 0; index < limit; index++) {
      this.productos.push({
        idProducto: faker.string.uuid(),
        nombreProducto: faker.commerce.productName(),
        precioProducto: faker.commerce.price({ min: 50, max: 200 }),
        descripcionProducto: faker.commerce.productDescription(),
        stockProducto: faker.number.int({ min: 10, max: 100 }),
        imagenProducto: faker.image.urlLoremFlickr(640, 480, 'hair'),
        categoriaProducto: faker.seed(categorias),
      });
    }
  }


  async create(data){
    const nuevoProducto = {
      id: faker.string.uuid(),
      ...data
    }
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  async find() {
    try {
      return this.productos;
    } catch (error) {
      throw boom.badImplementation('Se produjo un error al encontrar productos');
    }
  }

  async findOne(idProducto) {
    const producto = this.productos.find(item => item.idProducto === idProducto);
    if (!producto) {
      throw boom.notFound('Producto no encontrado');
    }
    return producto;
  }

  async update(idProducto, cambios) {
    const index = this.productos.findIndex(item => item.idProducto === idProducto);
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    const producto = this.productos[index];
    this.productos[index] = {
      ...producto,
      ...cambios
    };
    return this.productos[index];
  }

  async delete(idProducto) {
    const index = this.productos.findIndex(item => item.idProducto ===idProducto);
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    this.productos.splice(index,1);
    return{ idProducto };
  }
}

module.exports = ProductoService;

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
