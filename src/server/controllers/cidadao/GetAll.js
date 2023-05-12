import { StatusCodes } from 'http-status-codes';

import Cidadao from '../../models/Cidadao.js';


const cidadaoController = {};

cidadaoController.getAll = async (_, res) => {
  try {
    const cidadao = await Cidadao.findAll();

    res.status(StatusCodes.OK).json(cidadao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Ocorreu um erro ao buscar os registros.',
    });
  }
};

export default cidadaoController;
