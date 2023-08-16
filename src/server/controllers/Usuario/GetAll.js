import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const usuarioController = {};

usuarioController.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();

    return res.status(StatusCodes.OK).json({ usuarios });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar os usuários!',
    });
  }
};

export default usuarioController;
