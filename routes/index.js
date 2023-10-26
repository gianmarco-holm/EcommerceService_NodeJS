const express = require('express');

const productRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app) {
  app.use('/products', productRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);

  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
