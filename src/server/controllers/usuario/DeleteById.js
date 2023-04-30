import Usuario from '../../model/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const usuarioController = {};

usuarioController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const usuario = await Usuario.destroy({ where: { id: id } });

    res.status(StatusCodes.OK).json(usuario);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default usuarioController;
