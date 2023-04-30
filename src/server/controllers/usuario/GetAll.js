import Usuario from '../../model/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const usuarioController = {};

usuarioController.getAll = async (_, res) => {
  try {
    const usuario = await Usuario.findAll();

    res.status(StatusCodes.OK).json(usuario);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Ocorreu um erro ao buscar os registros.',
    });
  }
};

export default usuarioController;
