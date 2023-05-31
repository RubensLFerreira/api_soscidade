import Prefeitura from '../../models/Prefeitura.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const prefeituraController = {};

prefeituraController.getAll = async (req, res) => {
  try {
    const prefeituras = await Prefeitura.findAll({
      include: {
        model: Usuario,
        as: 'usuario',
        // attributes: {
        //   exclude: ['senha'],
        // },
      },
    });

    return res.status(StatusCodes.OK).json({ prefeituras });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar os registros de prefeitura!',
    });
  }
};

export default prefeituraController;
