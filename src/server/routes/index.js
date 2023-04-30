import express from 'express';

import { StatusCodes } from 'http-status-codes';

import usuarioGetAll from '../controllers/usuario/GetAll.js';
import usuarioCreate from '../controllers/usuario/Create.js';
import usuarioUpdateById from '../controllers/usuario/UpdateById.js';
import usuarioDeleteById from '../controllers/usuario/DeleteById.js';

const router = express.Router();

router.get('/usuarios', usuarioGetAll.getAll);
router.post('/usuarios', usuarioCreate.create);
router.put('/usuario/:id', usuarioUpdateById.updateById);
router.delete('/usuario/:id', usuarioDeleteById.deleteById);

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

export default router;
