import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Usuario = sequelize.define(
  'usuario',
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
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'usuario_email_key',
    },
    telefone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'perfil',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'usuario_email_key',
        unique: true,
        fields: [{ name: 'email' }],
      },
      {
        name: 'usuario_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Usuario;
