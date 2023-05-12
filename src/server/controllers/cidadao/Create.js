import Cidadao from '../../models/Cidadao.js';

import { StatusCodes } from 'http-status-codes';

import cidadaoSchema from '../../validators/cidadaoValidator.js';

const cidadaoController = {};

cidadaoController.create = async (req, res) => {
  try {
    const {
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    } = req.body;

    await cidadaoSchema.validate({
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    }, { abortEarly: false });

    const cidadao = await Cidadao.create({
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    });

    return res.status(StatusCodes.CREATED).json(cidadao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default cidadaoController;
