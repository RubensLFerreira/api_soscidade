import Prefeitura from '../../models/Prefeitura.js';

import { StatusCodes } from 'http-status-codes';

const prefeituraController = {};

prefeituraController.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const prefeitura = await Prefeitura.findOne({ where: { id: id } });

    if (!prefeitura) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Este registro não existe!',
      });
    }
    return res.status(StatusCodes.ACCEPTED).json({ prefeitura });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar registro!',
    });
  }
};

export default prefeituraController;
