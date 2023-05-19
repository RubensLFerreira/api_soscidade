import Problema from '../../models/Problema.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.create = async (req, res) => {
  try {
    const {
      categoria,
      imagem,
      observacao,
      status,
      cidadao_id,
      prefeitura_id,
      localizacao_id,
    } = req.body;

    const problema = await Problema.create({
      categoria,
      imagem,
      observacao,
      status,
      cidadao_id,
      prefeitura_id,
      localizacao_id,
    });

    return res.status(StatusCodes.CREATED).json(problema);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default problemaController;
