import Cliente from '../../model/Cliente.js';

import { StatusCodes } from 'http-status-codes';

const clienteController = {};

clienteController.create = async (req, res) => {
  try {
    const { nome, idade, cpf } = req.body;

    const cliente = await Cliente.create({
      nome,
      idade,
      cpf,
    });

    return res.status(StatusCodes.CREATED).json(cliente);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default clienteController;
