import dotenv from 'dotenv';
dotenv.config();

import Usuario from '../../models/Usuario.js';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { StatusCodes } from 'http-status-codes';

const usuarioLogin = {};

usuarioLogin.login = async (req, res) => {
  try {
    const { login, senha, confSenha } = req.body;

    const usuario = await Usuario.findOne({ where: { login: login } });

    if (!login) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: 'Login é obrigatório' });
    }
    if (!senha) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: 'Senha é obrigatório' });
    }

    if (senha !== confSenha) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: 'Senha incorreta' });
    }

    if (!usuario) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        message: 'Registro não encontrado!',
      });
    }

    const checkSenha = await bcrypt.compare(senha, usuario.senha);

    if (checkSenha == false) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Senha inválida!' });
    }

    const secret = process.env.SECRET;

    const payload = { id: usuario.id, perfil_id: usuario.perfil_id };
    const token = jwt.sign(payload, secret);

    res.status(StatusCodes.OK).json({ message: 'Token válido', token });
  } catch (error) {
    console.log(error);

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export default usuarioLogin;
