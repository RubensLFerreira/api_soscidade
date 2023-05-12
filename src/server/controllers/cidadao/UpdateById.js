import { StatusCodes } from 'http-status-codes';

import Cidadao from '../../models/Cidadao.js';

import cidadaoSchema from '../../validators/cidadaoValidator.js';


const cidadaoController = {};

cidadaoController.updateById = async (req, res) => {
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

    await cidadaoSchema.validate({
      nome,
      cpf,
      sexo,
      nascimento,
      telefone,
      email,
      cidade,
      bairro,
      rua,
    });

    const cidadao = await Cidadao.update(
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

    res.status(StatusCodes.OK).json(cidadao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
    });
  }
};

export default cidadaoController;
