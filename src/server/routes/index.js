import express from 'express';

import { StatusCodes } from 'http-status-codes';

// import authCidadao from '../middlewares/authCidadao.js';
// import authPrefeitura from '../middlewares/authPrefeitura.js';
// import authAdmin from '../middlewares/authAdmin.js';
import auth from '../middlewares/auth.js';

import usuarioGetById from '../controllers/Usuario/GetById.js';

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

router.get('/usuario/:id', usuarioGetById.getById);

router.get('/cidadaos', cidadaoGetAll.getAll);
router.get('/cidadao/:id', cidadaoGetById.getById);
router.post('/cidadao/cadastrar', cidadaoCreate.create);
router.put('/cidadao/editar/:id', auth, cidadaoUpdateById.updateById);
router.delete('/cidadao/excluir/:id', auth, cidadaoDeleteById.deleteById);
// excluir cidadão por id
// historico do cidadão

router.get('/prefeituras', prefeituraGetAll.getAll);
router.get('/prefeituras/:id', prefeituraGetById.getById);
router.post('/prefeitura/cadastrar', prefeituraCreate.create);
router.put('/prefeitura/editar/:id', auth, prefeituraUpdateById.updateById);
router.delete('/prefeitura/excluir/:id', auth, prefeituraDeleteById.deleteById);
// excluir prefeitura por id
// historico da prefeitura

router.get('/problemas', auth, problemaGetAll.getAll);
router.get('/problema/:id', problemaGetById.getById);
router.post('/problema/cadastrar', problemaCreate.create);
router.put('/problema/editar/:id', problemaUpdateById.updateById);
router.delete('/problema/excluir:id', problemaDeleteById.deleteById);
// excluir problema por id

export default router;
