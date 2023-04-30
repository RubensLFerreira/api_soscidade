import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.BIGINT(11),
    allowNull: false,
    unique: true,
  },
  sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nascimento: {
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

// (async () => {
//   await Usuario.sync({ force: true });
// })();

export default Usuario;