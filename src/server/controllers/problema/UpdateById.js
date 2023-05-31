import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';

import problemaSchema from '../../validators/problemaValidator.js';

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
    } = req.body;

    await problemaSchema.validate(
      {
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
      },
      { abortEarly: false }
    );

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

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
      validator: error.errors,
    });
  }
};

export default problemaController;
