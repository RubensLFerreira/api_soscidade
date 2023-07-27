import Cidadao from '../../models/Cidadao.js';
import Usuario from '../../models/Usuario.js';

import cidadaoSchema from '../../validators/cidadaoValidator.js';

import createUserToken from '../../helpers/createUserToken.js';

import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

const cidadaoController = {};

cidadaoController.create = async (req, res) => {
  try {
    const { nome, cpf, sexo, nascimento, telefone, email, login, senha } =
      req.body;

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

    await Cidadao.create({
      cpf,
      sexo,
      nascimento,
      usuario_id: usuario.id,
    });

    await createUserToken(usuario, req, res);
  } catch (error) {
    console.log(error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao criar registro!',
      validator: error.errors,
    });
  }
};

export default cidadaoController;
