import { StatusCodes } from 'http-status-codes';

import Prefeitura from '../../models/Prefeitura.js';

import prefeituraSchema from '../../validators/prefeituraValidator.js';


const prefeituraController = {};

prefeituraController.create = async (req, res) => {
  try {
    const { 
      nome,
      telefone,
      email,
      site,
      prefeito,
      cidade,
      bairro,
      rua
    } = req.body;

    await prefeituraSchema.validate({
      nome,
      telefone,
      email,
      site,
      prefeito,
      cidade,
      bairro,
      rua
    }, { abortEarly: false});

    const prefeitura = await Prefeitura.create({
      nome,
      telefone,
      email,
      site,
      prefeito,
      cidade,
      bairro,
      rua,
    });

    return res.status(StatusCodes.CREATED).json(prefeitura);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro ao criar registro',
    });
  }
};

export default prefeituraController;
