import { StatusCodes } from 'http-status-codes';

import Problema from '../../models/Problema.js';

import problemaSchema from '../../validators/problemaValidator.js';

const problemaController = {};

problemaController.updateById = async (req, res) => {
  try {
    const id = req.params.id;

    const { cidade, bairro, rua, tipo, observacao, cidadao_id, prefeitura_id } =
      req.body;

    await problemaSchema.validate({
      cidade,
      bairro,
      rua,
      tipo,
      observacao,
      cidadao_id,
      prefeitura_id,
      localizacao_id
    });

    const problema = await Problema.update(
      {
        cidade,
        bairro,
        rua,
        tipo,
        observacao,
        cidadao_id,
        prefeitura_id,
        localizacao_id
      },
      {
        where: { id: id },
      }
    );

    res.status(StatusCodes.OK).json(problema);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro',
    });
  }
};
