const express = require('express');
const UsuarioService = require('../services/usuarioService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema, deleteUsuarioSchema } = require('../schemas/usuarioSchema')

const router = express.Router();
const service = new UsuarioService();

router.get('/',
  async (req, res, next) => {
    try {
      const usuarios = await service.find();
      res.status(200).json(usuarios);
    } catch (error) {
      next(error);
    }
  }
);


router.get('/:idUsuario',
  validatorHandler(getUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const {idUsuario} = req.params;
      const usuario = await service.findOne(idUsuario);
      res.status(200).json(usuario);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoUsuario = await service.create(body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:idUsuario',
  validatorHandler(getUsuarioSchema, 'params'),
  validatorHandler(updateUsuarioSchema, 'body'),
  async(req, res) => {
  try {
    const { idUsuario } = req.params;
    const body = req.body;
    const usuario = await service.update(idUsuario, body);
    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
});

router.delete('/:idUsuario',
  validatorHandler(deleteUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idUsuario } = req.params;
      const rta = await service.delete(idUsuario);
      res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
