const express = require('express');

const productoRouter = require('./productoRouter');
const usuarioRouter = require('./usuarioRouter');
const reservaRouter = require('./reservaRouter');

function routerApi(app) {

  // app.use('/products', productoRouter);
  // app.use('/users', usuarioRouter);
  // app.use('/categories', servicioRouter);

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/productos', productoRouter);
  router.use('/usuarios', usuarioRouter);
  router.use('/reservas', reservaRouter);
}

module.exports = routerApi;
