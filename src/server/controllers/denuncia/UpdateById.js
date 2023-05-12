import { StatusCodes } from 'http-status-codes';

import Denuncia from '../../models/Denuncia.js';

import denunciaSchema from '../../validators/denunciaValidator.js';

const denunciaController = {};

denunciaController.updateById = async (req, res) => {
  try {
    const id = req.params.id;

    const { cidade, bairro, rua, tipo, observacao, cidadao_id, prefeitura_id } =
      req.body;

    await denunciaSchema.validate({
      cidade,
      bairro,
      rua,
      tipo,
      observacao,
      cidadao_id,
      prefeitura_id,
    });

    const denuncia = await Denuncia.update(
      {
        cidade,
        bairro,
        rua,
        tipo,
        observacao,
        cidadao_id,
        prefeitura_id,
      },
      {
        where: { id: id },
      }
    );

    res.status(StatusCodes.OK).json(denuncia);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro',
    });
  }
};
