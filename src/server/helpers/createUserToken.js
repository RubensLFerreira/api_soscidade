import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const createUserToken = async (usuario, req, res) => {
  const secret = process.env.SECRET;

  const token = jwt.sign({
    nome: usuario.nome,
    id: usuario.id,
  }, secret);

  res.status(StatusCodes.OK).json({
    message: 'Usuário autenticado!',
    token: token,
    usuarioId: usuario.id,
  });
};

export default createUserToken;