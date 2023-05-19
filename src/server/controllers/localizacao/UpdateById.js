import { StatusCodes } from 'http-status-codes';

import Localizacao from '../../models/Localizacao.js';


const localizacaoController = {};

localizacaoController.updateById = async (req, res) => {
  try {
    const id = req.params.id;

    const { latitude, lonfitude, rua, bairro, cidade, uf } = req.body;

    const localizacao = await Localizacao.update(
      {
        latitude,
        lonfitude,
        rua,
        bairro,
        cidade,
        uf,
      },
      {
        where: { id: id },
      }
    );

    res.status(StatusCodes.OK).json(localizacao);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao atualizar registro',
    });
  }
};

export default localizacaoController;
