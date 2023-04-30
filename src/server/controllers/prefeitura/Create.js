import Prefeitura from '../../model/Prefeitura.js';

import { StatusCodes } from 'http-status-codes';

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
