import Cliente from '../../model/Cliente.js';

import { StatusCodes } from 'http-status-codes';

const clienteController = {};

clienteController.updateById = async (req, res) => {
  try {
    const id = req.params.id;

    const { nome, idade, cpf } = req.body;

    const cliente = await Cliente.update(
      {
        nome,
        idade,
        cpf,
      },
      { where: { id: id } }
    );

    res.status(StatusCodes.OK).json(cliente);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro!',
    });
  }
};

export default clienteController;
