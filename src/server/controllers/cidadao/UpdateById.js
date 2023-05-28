import Cidadao from '../../models/Cidadao.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const cidadaoController = {};

cidadaoController.updateById = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      login,
      senha,
      usuarioId,
    } = req.body;

    const cidadao = await Cidadao.update(
      {
        cpf,
        sexo_id: sexo,
        nascimento,
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
        perfil_id: 1,
      },
      { where: { id: usuarioId } }
    );

    res.status(StatusCodes.OK).json({ cidadao, usuario });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar o cidadao',
      error: error.message,
    });
  }
};

export default cidadaoController;
