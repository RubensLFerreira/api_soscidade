import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.getByPending = async (req, res) => {
  try {
    const problemas = await Problema.findAll({
      where: { status: true },
      include: {
        model: Localizacao,
        as: 'localizacao',
      },
    });

    if (!problemas) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Este registro não existe!',
      });
    }

    return res.status(StatusCodes.OK).json({ problemas });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro ao buscar registros!',
    });
  }
};

export default problemaController;
