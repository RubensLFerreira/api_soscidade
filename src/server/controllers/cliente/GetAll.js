import { router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Cliente } from '../../model/Cliente.js';

router.get('/clientes', async (req, res) => {
  const getAll = await Cliente.findAll();

  try {
    res.status(StatusCodes.ACCEPTED).json(getAll);
  } catch (error) {
    res.status(400).send('Não foi possível encontrar os clientes!');
  }
});

export default router;