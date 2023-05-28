import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Usuario from './Usuario.js';

const Prefeitura = sequelize.define(
  'prefeitura',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prefeito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'prefeitura',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'prefeitura_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

Prefeitura.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

export default Prefeitura;
