import Usuario from '../../models/Usuario.js';
import Cidadao from '../../models/Cidadao.js';

import { StatusCodes } from 'http-status-codes';

const cidadaoController = {};

cidadaoController.getAll = async (req, res) => {
  try {
    const cidadaos = await Cidadao.findAll({
      include: {
        model: Usuario,
        as: 'usuario',
      },
    });

    return res.status(StatusCodes.OK).json({ cidadaos });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar os registros de cidadão!',
    });
  }
};

export default cidadaoController;
