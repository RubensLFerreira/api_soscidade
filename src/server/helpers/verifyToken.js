import dotenv from 'dotenv';
dotenv.config();

import { StatusCodes } from 'http-status-codes';

import jwt from 'jsonwebtoken';
import getToken from './getToken.js';

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Acesso negado!' });
  }

  const token = getToken(req);

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Acesso negado!' });
  }

  const secret = process.env.SECRET;

  try {
    const verified = jwt.verify(token, secret);
    req.usuario = verified;
    next();
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Token inválido!' });
  }
};

export default checkToken;
