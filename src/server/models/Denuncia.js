import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Denuncia = sequelize.define(
  'denuncia',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cidadao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cidadao',
        key: 'id',
      },
    },
    prefeitura_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'prefeitura',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'denuncia',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'denuncia_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Denuncia;
