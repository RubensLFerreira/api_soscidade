import { StatusCodes } from 'http-status-codes';

import Prefeitura from '../../models/Prefeitura.js';

import prefeituraSchema from '../../validators/prefeituraValidator.js';

const prefeituraController = {};

prefeituraController.updateById = async (req, res) => {
  try {
    const id = req.params.id;

    const {
      nome,
      telefone,
      email,
      site,
      prefeito,
      cidade,
      bairro,
      rua,
    } = req.body;

    await prefeituraSchema.validate({
      nome,
      telefone,
      email,
      site,
      prefeito,
      cidade,
      bairro,
      rua,
    });

    const prefeitura = await Prefeitura.update(
      {
        nome,
        telefone,
        email,
        site,
        prefeito,
        cidade,
        bairro,
        rua,
      },
      { where: { id: id } }
    );

    res.status(StatusCodes.OK).json(prefeitura);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
    });
  }
};

export default prefeituraController;
