import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Prefeitura = sequelize.define(
  'prefeitura',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'prefeitura_email_key',
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: 'prefeitura_site_key',
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
    },
  },
  {
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
      {
        name: 'prefeitura_site_key',
        unique: true,
        fields: [{ name: 'site' }],
      },
    ],
  }
);

export default Prefeitura;
