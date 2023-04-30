import Usuario from '../../model/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const usuarioController = {};

usuarioController.create = async (req, res) => {
  try {
    const {
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    } = req.body;

    const usuario = await Usuario.create({
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    });

    return res.status(StatusCodes.CREATED).json(usuario);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default usuarioController;
