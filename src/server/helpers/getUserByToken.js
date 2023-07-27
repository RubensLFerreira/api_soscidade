import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

import Usuario from '../models/Usuario';
import { StatusCodes } from 'http-status-codes';

const getUserByToken = async (token) => {
  const secret = process.env.SECRET;

  if (!token)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: 'Acesso negado!' });

  try {
    const decoded = jwt.verify(token, secret);

    const usuarioId = decoded.id;

    const usuario = await Usuario.findOne({ id: usuarioId });

    return usuario;
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Token invalido!',
      error: error,
    });
  }
};

export default getUserByToken;
