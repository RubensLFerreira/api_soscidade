import { StatusCodes } from 'http-status-codes';

import Prefeitura from '../../models/Prefeitura.js';


const prefeituraController = {};

prefeituraController.getAll = async (_, res) => {
  try {
    const prefeitura = await Prefeitura.findAll();

    res.status(StatusCodes.OK).json(prefeitura);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Ocorreu um erro ao buscar os registros.',
    });
  }
};

export default prefeituraController;
