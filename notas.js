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

