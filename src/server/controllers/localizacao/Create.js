import Localizacao from '../../models/Localizacao.js';

import { StatusCodes } from 'http-status-codes';

const localizacaoController = {};

localizacaoController.create = async (req, res) => {
  try {
    const { latitude, lonfitude, rua, bairro, cidade, uf } = req.body;

    const localizacao = await Localizacao.create({
      latitude,
      lonfitude,
      rua,
      bairro,
      cidade,
      uf,
    });

    return res.status(StatusCodes.CREATED).json(localizacao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default localizacaoController;
