import Cidadao from '../../models/Cidadao.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

const cidadaoController = {};

cidadaoController.create = async (req, res) => {
  try {
    const {
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      login,
      senha,
    } = req.body;

    const salt = await bcrypt.genSalt(5);
    const senhaHash = await bcrypt.hash(senha, salt);

    const usuario = await Usuario.create({
      nome,
      login,
      senha: senhaHash,
      email,
      telefone,
      perfil_id: 1,
    });

    const cidadao = await Cidadao.create({
      cpf,
      sexo_id: sexo,
      nascimento,
      usuario_id: usuario.id,
    });

    return res.status(StatusCodes.CREATED).json({ cidadao, usuario });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

export default cidadaoController;
