const express = require('express');
const ProductoService = require('../services/productoService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductoSchema, updateProductoSchema, getProductoSchema, deleteProductoSchema } = require('../schemas/productoSchema')

const router = express.Router();
const service = new ProductoService();

router.get('/',
  async (req, res, next) => {
    try {
      const productos = await service.find();
      res.status(200).json(productos);
    } catch (error) {
      next(error);
    }
  }
);


router.get('/:idProducto',
  validatorHandler(getProductoSchema, 'params'),
  async (req, res, next) => {
    try {
      const {idProducto} = req.params;
      const producto = await service.findOne(idProducto);
      res.status(200).json(producto);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoProducto = await service.create(body);
      res.status(201).json(nuevoProducto);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idProducto',
  validatorHandler(getProductoSchema, 'params'),
  validatorHandler(updateProductoSchema, 'body'),
  async(req, res) => {
  try {
    const { idProducto } = req.params;
    const body = req.body;
    const producto = await service.update(idProducto, body);
    res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
});

router.delete('/:idProducto',
  validatorHandler(deleteProductoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idProducto } = req.params;
      const rta = await service.delete(idProducto);
      res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
