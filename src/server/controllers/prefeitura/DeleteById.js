import Prefeitura from '../../model/Prefeitura.js';

import { StatusCodes } from 'http-status-codes';

const prefeituraController = {};

prefeituraController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const prefeitura = await Prefeitura.destroy({ where: { id: id } });

    res.status(StatusCodes.OK).json(prefeitura);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default prefeituraController;
