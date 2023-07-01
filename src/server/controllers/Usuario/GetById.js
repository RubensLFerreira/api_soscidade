import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const usuarioController = {};

usuarioController.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findOne({
      where: { id: id },
    });

    if (!usuario) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Este registro não existe!',
      });
    }

    return res.status(StatusCodes.OK).json({ usuario });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar registro!',
    });
  }
};

export default usuarioController;