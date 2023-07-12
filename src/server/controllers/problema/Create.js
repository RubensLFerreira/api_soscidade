import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';
import Categoria from '../../models/Categoria.js';
import Cidadao from '../../models/Cidadao.js';
import Prefeitura from '../../models/Prefeitura.js';

import problemaSchema from '../../validators/problemaValidator.js';

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

    const localizacao = await Localizacao.create({
      latitude,
      longitude,
      rua,
      bairro,
      cidade,
      uf,
    });

    const resCategoria = await Categoria.findOne({ where: { id: categoria } });
    const resCidadao = await Cidadao.findOne({ where: { id: cidadao } });
    const resPrefeitura = await Prefeitura.findOne({ where: { id: prefeitura } });

    const problema = await Problema.create({
      imagem,
      observacao,
      status,
      categoria_id: resCategoria.id,
      cidadao_id: resCidadao.id,
      prefeitura_id: resPrefeitura.id,
      localizacao_id: localizacao.id,
    });

    return res.status(StatusCodes.CREATED).json({ problema, localizacao });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao criar registro!',
      validator: error.errors,
    });
  }
};

export default problemaController;
