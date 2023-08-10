import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';
import Categoria from '../../models/Categoria.js';
import Prefeitura from '../../models/Prefeitura.js';
import Usuario from '../../models/Usuario.js';

import problemaSchema from '../../validators/problemaValidator.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.create = async (req, res) => {
  try {
    const {
      observacao,
      status,
      categoria,
      usuario,
      prefeitura,
      latitude,
      longitude,
      rua,
      bairro,
      cidade,
      uf,
    } = req.body;

    const imagem = req.files;

    await problemaSchema.validate(
      {
        imagem,
        observacao,
        status,
        categoria,
        usuario,
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
    const resUsuario = await Usuario.findOne({ where: { id: usuario } });
    const resPrefeitura = await Prefeitura.findOne({
      where: { id: prefeitura },
    });

    const problema = await Problema.create({
      imagem: [],
      observacao,
      status,
      categoria_id: resCategoria.id,
      usuario_id: resUsuario.id,
      prefeitura_id: resPrefeitura.id,
      localizacao_id: localizacao.id,
    });

    imagem.map((image) => {
      problema.imagem.push(image.filename);
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
