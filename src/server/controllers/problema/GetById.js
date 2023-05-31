import Problema from '../../models/Problema.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const problema = await Problema.findOne({ where: { id: id } });

    if (!problema) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Este registro não existe!',
      });
    }
    return res.status(StatusCodes.ACCEPTED).json({ problema });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar registro!',
    });
  }
};

export default problemaController;
