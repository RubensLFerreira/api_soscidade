import Cliente from '../../model/Cliente.js';

import { StatusCodes } from 'http-status-codes';

const clienteController = {};

clienteController.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const cliente = await Cliente.destroy({ where: { id: id } });

    res.status(StatusCodes.OK).json(cliente);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao deletar registro!',
    });
  }
};

export default clienteController;
