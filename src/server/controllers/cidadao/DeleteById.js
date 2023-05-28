import Cidadao from '../../models/Cidadao.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const cidadaoController = {};

cidadaoController.deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.destroy({
      where: { id: id },
    });

    const cidadao = await Cidadao.destroy({
      where: { id: id },
    });

    res.status(StatusCodes.OK).json({ cidadao, usuario });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
    });
  }
};

export default cidadaoController;
