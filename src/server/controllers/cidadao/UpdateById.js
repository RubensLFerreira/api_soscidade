import Cidadao from '../../models/Cidadao.js';
import Usuario from '../../models/Usuario.js';

import cidadaoSchema from '../../validators/cidadaoValidator.js';

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

    await cidadaoSchema.validate(
      {
        nome,
        cpf,
        sexo,
        nascimento,
        telefone,
        email,
        login,
        senha,
      },
      { abortEarly: false }
    );

    const cidadao = await Cidadao.update(
      {
        cpf,
        sexo,
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

    return res.status(StatusCodes.OK).json({ cidadao, usuario });
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
      validator: error.errors,
    });
  }
};

export default cidadaoController;
