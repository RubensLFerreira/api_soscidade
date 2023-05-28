import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.updateById = async (req, res) => {
  try {
    const { id } = req.params;

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
      localizacaoId,
    } = req.body;

    const localizacao = await Localizacao.update(
      {
        latitude,
        longitude,
        rua,
        bairro,
        cidade,
        uf,
      },
      { where: { id: id } }
    );

    const problema = await Problema.update(
      {
        imagem,
        observacao,
        status,
        categoria_id: categoria,
        cidadao_id: cidadao,
        prefeitura_id: prefeitura,
        localizacao_id: localizacao.id,
      },
      { where: { id: id } }
    );

    return res.status(StatusCodes.CREATED).json({ problema, localizacao });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default problemaController;
