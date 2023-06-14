import express from 'express';

import { StatusCodes } from 'http-status-codes';

import authCidadao from '../middlewares/authCidadao.js';
import authPrefeitura from '../middlewares/authPrefeitura.js';
import authAdmin from '../middlewares/authAdmin.js';


import cidadaoCreate from '../controllers/cidadao/Create.js';
import cidadaoGetAll from '../controllers/cidadao/GetAll.js';
import cidadaoGetById from '../controllers/cidadao/GetById.js';
import cidadaoUpdateById from '../controllers/cidadao/UpdateById.js';
import cidadaoDeleteById from '../controllers/cidadao/DeleteById.js';

import prefeituraCreate from '../controllers/prefeitura/Create.js';
import prefeituraGetAll from '../controllers/prefeitura/GetAll.js';
import prefeituraGetById from '../controllers/prefeitura/GetById.js';
import prefeituraUpdateById from '../controllers/prefeitura/UpdateById.js';
import prefeituraDeleteById from '../controllers/prefeitura/DeleteById.js';

import problemaCreate from '../controllers/problema/Create.js';
import problemaGetAll from '../controllers/problema/GetAll.js';
import problemaGetById from '../controllers/problema/GetById.js';
import problemaUpdateById from '../controllers/problema/UpdateById.js';
import problemaDeleteById from '../controllers/problema/DeleteById.js';

import usuarioLogin from '../controllers/login/usuarioLogin.js';


const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.post('/login', usuarioLogin.login);


router.post('/cidadao/cadastrar', cidadaoCreate.create);
router.put('/cidadao/editar/:id', authCidadao, cidadaoUpdateById.updateById);
router.delete('/cidadao/excluir/:id', authCidadao, cidadaoDeleteById.deleteById);
// historico do cidadão

router.post('/prefeitura/cadastrar', prefeituraCreate.create);
router.put('/prefeitura/editar/:id', authPrefeitura, prefeituraUpdateById.updateById);
router.delete('/prefeitura/excluir/:id', authPrefeitura, prefeituraDeleteById.deleteById);
// historico da prefeitura

router.post('/problema/cadastrar', problemaCreate.create);
router.put('/problema/editar/:id', problemaUpdateById.updateById);
router.delete('/problema/excluir:id', problemaDeleteById.deleteById);

router.get('/cidadaos', cidadaoGetAll.getAll);
router.get('/cidadao/:id', cidadaoGetById.getById);
// excluir cidadão por id

router.get('/prefeituras', authAdmin, prefeituraGetAll.getAll);
router.get('/prefeituras/:id', prefeituraGetById.getById);
// excluir prefeitura por id

router.get('/problemas', problemaGetAll.getAll);
router.get('/problema/:id', problemaGetById.getById);
// excluir problema por id


export default router;
