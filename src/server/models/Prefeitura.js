import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Prefeitura = sequelize.define(
  'prefeitura',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prefeito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'prefeitura_email_key',
    },
    senha: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'prefeitura',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'prefeitura_email_key',
        unique: true,
        fields: [{ name: 'email' }],
      },
      {
        name: 'prefeitura_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Prefeitura;
