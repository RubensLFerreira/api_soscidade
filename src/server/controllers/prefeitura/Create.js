import Prefeitura from '../../models/Prefeitura.js';
import Usuario from '../../models/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const prefeituraController = {};

prefeituraController.create = async (req, res) => {
  try {
    const {
      nome,
      telefone,
      email,
      prefeito,
      site,
      login,
      senha,
    } = req.body;
    
    const usuario = await Usuario.create({
      nome,
      login,
      senha,
      email,
      telefone,
      perfil_id: 2,
    });

    const prefeitura = await Prefeitura.create({
      site,
      prefeito,
      usuario_id: usuario.id,
    });

    return res.status(StatusCodes.CREATED).json({ prefeitura, usuario });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro ao criar o registro de prefeitura e usuário!',
    });
  }
};

export default prefeituraController;
