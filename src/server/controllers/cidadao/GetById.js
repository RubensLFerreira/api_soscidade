import Cidadao from '../../models/Cidadao.js';

import { StatusCodes } from 'http-status-codes';

const cidadaoController = {};

cidadaoController.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const cidadao = await Cidadao.findOne({ where: { id: id } });

    if (!cidadao) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Este registro não existe!',
      });
    }
    
    return res.status(StatusCodes.ACCEPTED).json({ cidadao });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar registro!',
    });
  }
};

export default cidadaoController;
