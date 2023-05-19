import { StatusCodes } from 'http-status-codes';

import Localizacao from '../../models/Localizacao.js';


const localizacaoController = {}

localizacaoController.getAll = async (req, res) => {
  try {
    const localizacao = await Localizacao.findAll();

    return res.status(StatusCodes.ACCEPTED).json(localizacao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro ao buscar registros!',
    });
  }
};

export default localizacaoController;