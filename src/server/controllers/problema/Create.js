import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.create = async (req, res) => {
  try {
    const {
      imagem,
      observacao,
      status,
      categoria,
      cidadao,
      prefeitura,
      latitude,
      longitude,
      rua,
      bairro,
      cidade,
      uf,
    } = req.body;

    const localizacao = await Localizacao.create({
      latitude,
      longitude,
      rua,
      bairro,
      cidade,
      uf,
    });

    const problema = await Problema.create({
      imagem,
      observacao,
      status,
      categoria_id: categoria,
      cidadao_id: cidadao,
      prefeitura_id: prefeitura,
      localizacao_id: localizacao.id,
    });

    return res.status(StatusCodes.CREATED).json({ problema, localizacao });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default problemaController;
