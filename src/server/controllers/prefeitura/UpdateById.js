import Prefeitura from '../../models/Prefeitura.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const prefeituraController = {};

prefeituraController.updateById = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      nome,
      telefone,
      email,
      prefeito,
      site,
      login,
      senha,
      usuarioId,
    } = req.body;

    const prefeitura = await Prefeitura.update(
      {
        site,
        prefeito,
        usuario_id: usuarioId,
      },
      { where: { id: id } }
    );

    const usuario = await Usuario.update(
      {
        nome,
        login,
        senha,
        email,
        telefone,
      },
      { where: { id:usuarioId } }
    );

    res.status(StatusCodes.OK).json({ prefeitura, usuario });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar o registro de prefeitura e usuário!',
      error: error.message,
    });
  }
};

export default prefeituraController;
