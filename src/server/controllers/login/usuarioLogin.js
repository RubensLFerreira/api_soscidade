import dotenv from 'dotenv';
dotenv.config();

import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import createUserToken from '../../helpers/createUserToken.js';

const usuarioLogin = {};

usuarioLogin.login = async (req, res) => {
  const { login, senha } = req.body;
  console.log(senha);

  const usuario = await Usuario.findOne({ where: { login: login } });

  if (!login) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: 'Login é obrigatório' });
    return;
  }

  if (!senha) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: 'Senha é obrigatório' });
    return;
  }

  if (!usuario) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: 'Registro não encontrado!',
    });
    return;
  }

  const checkSenha = await bcrypt.compare(senha, usuario.senha);
  console.log(senha, usuario.senha);

  if (!checkSenha) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: 'Senha inválida!' });
      return;
  }

  try {
    await createUserToken(usuario, req, res);
  } catch (error) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      message: 'Registro não encontrado!',
      error: error,
    });
  }
};

export default usuarioLogin;
