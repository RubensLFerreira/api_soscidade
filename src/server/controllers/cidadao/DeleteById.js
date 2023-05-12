import { StatusCodes } from 'http-status-codes';

import Cidadao from '../../models/Cidadao.js';


const cidadaoController = {};

cidadaoController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const cidadao = await Cidadao.destroy({ where: { id: id } });

    res.status(StatusCodes.OK).json(cidadao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default cidadaoController;
