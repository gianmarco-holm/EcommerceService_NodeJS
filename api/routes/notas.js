// CONFIGURACIÓN
// Se crea el archivo .gitignore .editorconfig .eslintrc.json
// npm init -y
// git init
// npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
// npm run dev      para ejecutarlo como desarrollador
// npm run start    para ejecutarlo en producción


// CREACIÓN DEL SERVIDOR CON EXPRESS.JS
// npm i express

// CREACION DE DATOS FAKE
// Para ello instalamos npm i faker y su importacion seria const faker = require('faker)
// y para mayor seguridad instalar la npm i faker@5.5.3 o aun mejor npm i @faker-js/faker
// y su importacion seria import faker = require('@faker-js/faker')

// PARA MANEJO DE ERRORES CON STATUS CODE SE PUEDE USAR BOOM
// instalar con npm i @hapi/boom

// PARA VALIDAR LOS DATOS EN EL MIDDLEWARE PODEMOS USAR JOI
// instalar npm i joi

// PARA DEJAR QUE OTROS ORIGENES SE CONECTEN DEBEMOS IMPLEMENTAR CORS
// npm i cors

// PERSISTENCIA
// Si los datos se clonan de git, se puede instalar todo lo anterior con npm i

// DOCKER
// Despues de instalar docker se sigue esta configuración
// Se crea el archivo docker-compose.yml

// Para integrar postgresql con nodejs se instala la libreria pg
// npm install pg

// ORM
// Luego de realizar la configuración de Docker se instala sequelize como ORM
// npm install --save sequelize
// Luego la instalación de los drivers que necesitamos
// npm install --save pg pg-hstore
// como ya tenemos instalado pg solo instalamos npm install --save pg-hstore

// MIGRACIONES
// Es un control de cambio so versiones en la estructura de la base de datos
// npm i sequelize-cli --save-dev
// Se añade el archivo de configuracion llamado .sequelizerc
// Luego se realiza la configuracion en db/config.js
// Luego se agrega los scripts de migraciones en package.json para poder ejecutar las lineas de comand
// "migrations:generate": "sequelize-cli migration:generate --name"
// La linea de comando sería el siguiente y sirve para crear el codigo listo para correr migraciones
// npm run migrations:generate create-usuario
// Si todo quedo bien entonces deberia de correr
// npm run migrations:run
// npm run migrations:generate create-reserva
// npm run migrations:generate create-producto

// RELACIONES


//TABLAS

// CREATE TABLE public.usuarios
// (
//     "idUsuario" uuid NOT NULL,
//     "nombreUsuario" character varying(255) NOT NULL,
//     "apellidoUsuario" character varying(255),
//     "correoUsuario" character varying(255) NOT NULL,
//     "contraseniaUsuario" character varying(255) NOT NULL,
//     "telefonoUsuario" character varying(15),
//     "direccionUsuario" character varying(255),
//     PRIMARY KEY ("idUsuario")
// );

// ALTER TABLE IF EXISTS public.usuarios
//     OWNER to holm;



// ROUTING
const express = require('express');
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});

// Los endpoints que sean especificas debe ir anter de las que son dinamicas
// En este caso si colocar filter, no lo va a tomar como :id sino como el product/filter
app.get('/product/filter', (req, res) => {
  res.send('Soy filter')
})

app.get('/products/:id', (req, res) => {
  // const = req.params.id;  hay 2 formas
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 1000
  });
});

app.get('/users',(req,res) => {
  // localhost:3000/users?limit=100&offset=200
  const { limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
})

app.get('/categories/:categoryId/products/:productId', (req, res) =>{
  const{categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  })
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
// despues de correrlo con npm run dev, ingresar a http://localhost:3000/

