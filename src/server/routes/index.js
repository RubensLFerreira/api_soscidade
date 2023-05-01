import express from 'express';

import { StatusCodes } from 'http-status-codes';

import usuarioGetAll from '../controllers/usuario/GetAll.js';
import usuarioCreate from '../controllers/usuario/Create.js';
import usuarioUpdateById from '../controllers/usuario/UpdateById.js';
import usuarioDeleteById from '../controllers/usuario/DeleteById.js';

import prefeituraGetAll from '../controllers/prefeitura/GetAll.js';
import prefeituraCreate from '../controllers/prefeitura/Create.js';
import prefeituraUpdateById from '../controllers/prefeitura/UpdateById.js';
import prefeituraDeleteById from '../controllers/prefeitura/DeleteById.js';

import problemaCreate from '../controllers/problema/Create.js';

const router = express.Router();

router.get('/usuarios', usuarioGetAll.getAll);
router.post('/usuarios', usuarioCreate.create);
router.put('/usuario/:id', usuarioUpdateById.updateById);
router.delete('/usuario/:id', usuarioDeleteById.deleteById);

router.get('/prefeituras', prefeituraGetAll.getAll);
router.post('/prefeituras', prefeituraCreate.create);
router.put('/prefeitura/:id', prefeituraUpdateById.updateById);
router.delete('/prefeitura/:id', prefeituraDeleteById.deleteById);

router.post('/problemas', problemaCreate.create);

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

export default router;
