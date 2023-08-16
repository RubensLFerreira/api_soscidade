import Problema from '../../models/Problema.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const problemaController = {};

problemaController.getAllProblemUser = async (req, res) => {
  const { id } = req.params;

  const usuario = await Usuario.findOne({ where: { id: id } });

  if (!usuario) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Usuário não encontrado!',
    });
  }

  const problemas = await Problema.findAll({
    where: {
      usuario_id: id,
    },
  });

  if (!problemas) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Este registro não existe!',
    });
  }

  try {
    return res.status(StatusCodes.OK).json({ problemas });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao buscar registros',
    });
  }
};

export default problemaController;
