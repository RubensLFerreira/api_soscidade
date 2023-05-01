import Problema from '../../model/Problema.js';
import Usuario from '../../model/Usuario.js';
import Prefeitura from '../../model/Prefeitura.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.create = async (req, res) => {
  try {
    const { cidade, bairro, rua, tipo, observacao, usuarioId, prefeituraId } =
      req.body;

    if (!usuarioId || !prefeituraId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'É necessário fornecer o ID do usuário e o ID da prefeitura',
      });
    }

    const problema = await Problema.create({
      cidade,
      bairro,
      rua,
      tipo,
      observacao,
      usuarioId,
      prefeituraId,
    });

    return res.status(StatusCodes.CREATED).json(problema);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default problemaController;
