import { StatusCodes } from 'http-status-codes';

import Denuncia from '../../models/Denuncia.js';


const denunciaController = {};

denunciaController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const denuncia = await Denuncia.destroy({ where: { id: id } });

    res.status(StatusCodes.OK).json(denuncia);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default denunciaController;
