import dotenv from 'dotenv';
dotenv.config();

import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import getToken from '../../helpers/getToken.js';

const usuarioController = {};

usuarioController.checkUsuario = async (req, res) => {
  let usuarioAtual;

  const secret = process.env.SECRET;

  if (req.headers.authorization) {
    const token = getToken(req);
    const decoded = jwt.verify(token, secret);

    usuarioAtual = await Usuario.findByPk(decoded.id);

    usuarioAtual.senha = undefined;
  } else {
    usuarioAtual = null;
  }

  try {
    res.status(StatusCodes.OK).json({ usuarioAtual });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Erro ao verificar usuário', error: error });
  }
};

export default usuarioController;
