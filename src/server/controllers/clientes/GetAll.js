import Cliente from '../../model/Cliente.js';

import { StatusCodes } from 'http-status-codes';

const clienteController = {};

clienteController.getAll = async (_, res) => {
  try {
    const cliente = await Cliente.findAll();

    res.status(StatusCodes.OK).json(cliente);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Ocorreu um erro ao buscar os registros.',
    });
  }
};

export default clienteController;
