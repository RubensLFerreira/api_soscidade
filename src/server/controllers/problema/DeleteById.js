import Problema from '../../models/Problema.js';
import Localizacao from '../../models/Localizacao.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const localizacao = await Localizacao.destroy({ where: { id: id } });

    const problema = await Problema.destroy({ where: { id: id } });

    return res.status(StatusCodes.OK).json({ problema, localizacao });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default problemaController;
