import Prefeitura from '../../models/Prefeitura.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const prefeituraController = {};

prefeituraController.deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.destroy({
      where: { id: id },
    });

    const prefeitura = await Prefeitura.destroy({
      where: { id: id },
    });

    res.status(StatusCodes.OK).json({ prefeitura, usuario });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
    });
  }
};

export default prefeituraController;
