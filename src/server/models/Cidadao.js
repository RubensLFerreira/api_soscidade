import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Cidadao = sequelize.define(
  'cidadao',
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
    senha: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'cidadao_cpf_key',
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nascimento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'cidadao_email_key',
    },
    telefone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cidadao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'cidadao_cpf_key',
        unique: true,
        fields: [{ name: 'cpf' }],
      },
      {
        name: 'cidadao_email_key',
        unique: true,
        fields: [{ name: 'email' }],
      },
      {
        name: 'cidadao_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Cidadao;
