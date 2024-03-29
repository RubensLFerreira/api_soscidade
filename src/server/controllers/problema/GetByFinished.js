import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.getByFinished = async (req, res) => {
  try {
    const problemas = await Problema.findAll({
      where: { status: false },
      include: {
        model: Localizacao,
        as: 'localizacao',
      },
    });

    return res.status(StatusCodes.OK).json({ problemas });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro ao buscar registros!',
    });
  }
};

export default problemaController;
