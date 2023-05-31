import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

const Categoria = sequelize.define(
  'categoria',
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
  },
  {
    sequelize,
    tableName: 'categoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'categoria_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

export default Categoria;
