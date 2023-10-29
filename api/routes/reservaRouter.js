const express = require('express');
const ReservaService = require('../services/reservaService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createReservaSchema, updateReservaSchema, getReservaSchema, deleteReservaSchema } = require('../schemas/reservaSchema');

const router = express.Router();
const service = new ReservaService();

router.get('/', async (req, res, next) => {
  try {
    const reservas = await service.find();
    res.status(200).json(reservas);
  } catch (error) {
    next(error);
  }
});

router.get('/:idReserva',
  validatorHandler(getReservaSchema, 'params'),
  async (req, res, next) => {
  try {
    const { idReserva } = req.params;
    const reserva = await service.findOne(idReserva);
    res.status(200).json(reserva);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createReservaSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const nuevaReserva = await service.create(body);
    res.status(201).json(nuevaReserva);
  } catch (error) {
    next(error);
  }
});

router.patch('/:idReserva',
  validatorHandler(getReservaSchema, 'params'),
  validatorHandler(updateReservaSchema, 'body'), async (req, res, next) => {
  try {
    const { idReserva } = req.params;
    const body = req.body;
    const reserva = await service.update(idReserva, body);
    res.status(200).json(reserva);
  } catch (error) {
    next(error);
  }
});

router.delete('/:idReserva',
  validatorHandler(deleteReservaSchema, 'params'),
  async (req, res, next) => {
  try {
    const { idReserva } = req.params;
    const rta = await service.delete(idReserva);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
