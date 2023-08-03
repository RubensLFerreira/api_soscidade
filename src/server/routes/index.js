import express from 'express';

import { StatusCodes } from 'http-status-codes';

import verifyToken from '../helpers/verifyToken.js';
import imageUpload from '../helpers/imageUpload.js';

import usuarioGetById from '../controllers/Usuario/GetById.js';
import checkUsuario from '../controllers/Usuario/CheckUsuario.js';

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
import problemaGetByPending from '../controllers/problema/GetByPending.js';
import problemaGetByFinished from '../controllers/problema/GetByFinished.js';

import usuarioLogin from '../controllers/login/usuarioLogin.js';

const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.post('/login', usuarioLogin.login);

router.get('/usuario/:id', usuarioGetById.getById);
router.get('/usuario', checkUsuario.checkUsuario);

router.get('/cidadaos', cidadaoGetAll.getAll);
router.get('/cidadao/:id', cidadaoGetById.getById);
router.post('/cidadao/cadastrar', cidadaoCreate.create);
router.put('/cidadao/editar/:id', cidadaoUpdateById.updateById);
router.delete('/cidadao/excluir/:id', cidadaoDeleteById.deleteById);
// historico do cidadão

router.get('/prefeituras', verifyToken, prefeituraGetAll.getAll);
router.get('/prefeituras/:id', prefeituraGetById.getById);
router.post('/prefeitura/cadastrar', prefeituraCreate.create);
router.put('/prefeitura/editar/:id', prefeituraUpdateById.updateById);
router.delete('/prefeitura/excluir/:id', prefeituraDeleteById.deleteById);
// historico da prefeitura

router.get('/problemas/pendentes', problemaGetByPending.getByPending);
router.get('/problemas/finalizados', problemaGetByFinished.getByFinished);
router.get('/problemas', problemaGetAll.getAll);
router.get('/problema/:id', problemaGetById.getById);
router.post(
  '/problema/cadastrar/:tipo',
  verifyToken,
  imageUpload.array('imagem'),
  problemaCreate.create
);
router.put('/problema/editar/:id', problemaUpdateById.updateById);
router.delete('/problema/excluir/:id', problemaDeleteById.deleteById);

export default router;
