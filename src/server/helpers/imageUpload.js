import multer from 'multer';
import path from 'path';

const imageStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    const tipo = req.params.tipo; // Captura o parâmetro "tipo" da URL
    const folder =
      tipo === 'cidadao'
        ? 'cidadao'
        : tipo === 'prefeitura'
        ? 'prefeitura'
        : 'problema';

    callback(null, `src/server/public/imagens/${folder}`);
  },

  filename: (req, file, callback) => {
    callback(
      null,
      Date.now() +
        String(Math.floor(Math.random() * 999)) +
        path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imageStorage,

  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return callback(
        new Error('Por favor, envia apenas imagens no formato png ou jpg')
      );
    }

    callback(undefined, true);
  },
});

export default imageUpload;
