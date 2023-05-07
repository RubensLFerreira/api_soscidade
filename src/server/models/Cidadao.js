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
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: 'cidadao_cpf_key',
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    nascimento: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'cidadao_email_key',
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
