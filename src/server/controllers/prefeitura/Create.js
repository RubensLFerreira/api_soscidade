import Prefeitura from '../../models/Prefeitura.js';
import Usuario from '../../models/Usuario.js';

import prefeituraSchema from '../../validators/prefeituraValidator.js';

import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import createUserToken from '../../helpers/createUserToken.js';

const prefeituraController = {};

prefeituraController.create = async (req, res) => {
  try {
    const { nome, telefone, email, prefeito, site, login, senha } = req.body;

    await prefeituraSchema.validate(
      {
        nome,
        telefone,
        email,
        prefeito,
        site,
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
      perfil_id: 2,
    });

    await Prefeitura.create({
      site,
      prefeito,
      usuario_id: usuario.id,
    });

    await createUserToken(usuario, req, res);
  } catch (error) {
    console.log(error);

   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao criar registro!',
      validator: error.errors,
    });

    return;
  }
};

export default prefeituraController;
