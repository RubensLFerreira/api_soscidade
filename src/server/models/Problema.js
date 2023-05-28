import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Localizacao from './Localizacao.js';

const Problema = sequelize.define(
  'problema',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id',
      },
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

Problema.belongsTo(Localizacao, { foreignKey: 'localizacao_id' });

export default Problema;
