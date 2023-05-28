import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Usuario from './Usuario.js';

const Cidadao = sequelize.define(
  'cidadao',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: 'cidadao_cpf_key',
    },
    nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    sexo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sexo',
        key: 'id',
      },
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
        name: 'cidadao_pkey',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  }
);

Cidadao.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

export default Cidadao;
