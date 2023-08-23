import path from 'path';

const imagesDirectory = path.join(process.cwd());

const controllerImagem = {};

controllerImagem.getAll = async (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(imagesDirectory, 'src/server/public/imagens/problema/', imageName);
  
  res.sendFile(imagePath);
};

export default controllerImagem;
