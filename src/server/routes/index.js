import express from 'express';

import { StatusCodes } from 'http-status-codes';

import clienteGetAll from '../controllers/clientes/GetAll.js';
import clienteCreate from '../controllers/clientes/Create.js';
import clienteUpdateById from '../controllers/clientes/UpdateById.js';
import clienteDeleteById from '../controllers/clientes/DeleteById.js';

const router = express.Router();

router.get('/clientes', clienteGetAll.getAll);
router.post('/clientes', clienteCreate.create);
router.put('/cliente/:id', clienteUpdateById.updateById);
router.delete('/cliente/:id', clienteDeleteById.deleteById);

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

export default router;
