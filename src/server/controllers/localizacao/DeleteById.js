import { StatusCodes } from 'http-status-codes';

import Localizacao from '../../models/Localizacao.js';


const localizacaoController = {};

localizacaoController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const localizacao = await Localizacao.destroy({
      where: { id: id },
    });

    res.status(StatusCodes.OK).json(localizacao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default localizacaoController;
