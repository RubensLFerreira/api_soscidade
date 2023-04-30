import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Prefeitura = sequelize.define('prefeitura', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  site: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prefeito: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

(async () => {
  await Prefeitura.sync({ force: true });
})();

export default Prefeitura;