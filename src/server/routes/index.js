import express from 'express';
import authCidadao from '../middlewares/authCidadao.js';
import authPrefeitura from '../middlewares/authPrefeitura.js';

import { StatusCodes } from 'http-status-codes';


import cidadaoCreate from '../controllers/cidadao/Create.js';
import cidadaoGetAll from '../controllers/cidadao/GetAll.js';
import cidadaoUpdateById from '../controllers/cidadao/UpdateById.js';
import cidadaoDeleteById from '../controllers/cidadao/DeleteById.js';

import prefeituraGetAll from '../controllers/prefeitura/GetAll.js';
import prefeituraCreate from '../controllers/prefeitura/Create.js';
import prefeituraUpdateById from '../controllers/prefeitura/UpdateById.js';
import prefeituraDeleteById from '../controllers/prefeitura/DeleteById.js';

import problemaCreate from '../controllers/problema/Create.js';
import problemaGetAll from '../controllers/problema/GetAll.js';
import problemaUpdateById from '../controllers/problema/UpdateById.js';
import problemaDeleteById from '../controllers/problema/DeleteById.js';

import usuarioLogin from '../controllers/login/usuarioLogin.js';


const router = express.Router();

router.get('/cidadaos', authCidadao, cidadaoGetAll.getAll);
router.post('/cidadao', cidadaoCreate.create);
router.put('/cidadao/:id', cidadaoUpdateById.updateById);
router.delete('/cidadao/:id', cidadaoDeleteById.deleteById);

router.get('/prefeituras', authPrefeitura, prefeituraGetAll.getAll);
router.post('/prefeitura', prefeituraCreate.create);
router.put('/prefeitura/:id', prefeituraUpdateById.updateById);
router.delete('/prefeitura/:id', prefeituraDeleteById.deleteById);

router.get('/problemas', problemaGetAll.getAll);
router.post('/problema', problemaCreate.create);
router.put('/problema/:id', problemaUpdateById.updateById);
router.delete('/problema/:id', problemaDeleteById.deleteById);

router.post('/auth/login', usuarioLogin.login);

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

export default router;
