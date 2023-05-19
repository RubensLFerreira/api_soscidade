import express from 'express';

import { StatusCodes } from 'http-status-codes';

import cidadaoGetAll from '../controllers/cidadao/GetAll.js';
import cidadaoCreate from '../controllers/cidadao/Create.js';
import cidadaoUpdateById from '../controllers/cidadao/UpdateById.js';
import cidadaoDeleteById from '../controllers/cidadao/DeleteById.js';

import prefeituraGetAll from '../controllers/prefeitura/GetAll.js';
import prefeituraCreate from '../controllers/prefeitura/Create.js';
import prefeituraUpdateById from '../controllers/prefeitura/UpdateById.js';
import prefeituraDeleteById from '../controllers/prefeitura/DeleteById.js';

import problemaCreate from '../controllers/problema/Create.js';
import problemaGetAll from '../controllers/problema/GetAll.js';

import localizacaoCreate from '../controllers/localizacao/Create.js';

const router = express.Router();

router.get('/cidadaos', cidadaoGetAll.getAll);
router.post('/cidadaos', cidadaoCreate.create);
router.put('/cidadao/:id', cidadaoUpdateById.updateById);
router.delete('/cidadao/:id', cidadaoDeleteById.deleteById);

router.get('/prefeituras', prefeituraGetAll.getAll);
router.post('/prefeituras', prefeituraCreate.create);
router.put('/prefeitura/:id', prefeituraUpdateById.updateById);
router.delete('/prefeitura/:id', prefeituraDeleteById.deleteById);

router.get('/problemas', problemaGetAll.getAll);
router.post('/problemas', problemaCreate.create);

router.post('/localizacao', localizacaoCreate.create);

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

export default router;
