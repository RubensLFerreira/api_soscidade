import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Problema = sequelize.define(
  'problema',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    observacao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
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
    localizacao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'localizacao',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'problema',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'problema_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Problema;
