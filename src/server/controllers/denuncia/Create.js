import Denuncia from '../../models/Denuncia.js';

import { StatusCodes } from 'http-status-codes';

const denunciaController = {};

denunciaController.create = async (req, res) => {
  try {
    const {
      cidade,
      bairro,
      rua,
      tipo,
      observacao,
      cidadao_id,
      prefeitura_id
    } = req.body;

    const denuncia = await Denuncia.create({
      cidade,
      bairro,
      rua,
      tipo,
      observacao,
      cidadao_id,
      prefeitura_id
    });

    return res.status(StatusCodes.CREATED).json(denuncia);
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Ocorreu um erro criar registro!',
    });
  }
};

export default denunciaController;
