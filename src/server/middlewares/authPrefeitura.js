import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const authPrefeitura = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ error: 'Token inválido!' });
    }

    const secret = process.env.SECRET;

    const decodedToken = jwt.verify(token, secret);
    const perfilId = decodedToken.perfil_id;

    if (perfilId === 2) {
      req.usuario = decodedToken;
      next();
    } else {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'Permissão negada' });
    }
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Token inválido!' });
  }
};

export default authPrefeitura;
