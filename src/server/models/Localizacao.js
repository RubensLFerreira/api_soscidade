import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Localizacao = sequelize.define(
  'localizacao',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lonfitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'localizacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'localizacao_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Localizacao;
