import { StatusCodes } from 'http-status-codes';

import Problema from '../../models/Problema.js';


const problemaController = {};

problemaController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const problema = await Problema.destroy({ where: { id: id } });

    res.status(StatusCodes.OK).json(problema);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default problemaController;
