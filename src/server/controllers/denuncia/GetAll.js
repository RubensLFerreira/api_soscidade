import Denuncia from '../../models/Denuncia.js';

import { StatusCodes } from 'http-status-codes';

const denunciaController = {};

denunciaController.getAll = async (req, res) => {
  try {
    const denuncias = await Denuncia.findAll();

    return res.status(StatusCodes.ACCEPTED).json(denuncias);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro ao buscar registros!',
    });
  }
};

export default denunciaController;
