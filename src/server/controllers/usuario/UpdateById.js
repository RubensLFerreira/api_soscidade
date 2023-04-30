import Usuario from '../../model/Usuario.js';

import { StatusCodes } from 'http-status-codes';

const usuarioController = {};

usuarioController.updateById = async (req, res) => {
  try {
    const id = req.params.id;

    const {
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    } = req.body;

    const usuario = await Usuario.update(
      {
        nome,
        cpf,
        sexo,
        nascimento,
        telefone,
        email,
        cidade,
        bairro,
        rua,
      },
      { where: { id: id } }
    );

    res.status(StatusCodes.OK).json(usuario);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
    });
  }
};

export default usuarioController;
