import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

import Usuario from './Usuario.js';
import Prefeitura from './Prefeitura.js';

const Problema = sequelize.define('problemas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
});

Usuario.hasMany(Problema, { foreignKey: 'usuarioId' });
Problema.belongsTo(Usuario);

Prefeitura.hasMany(Problema, { foreignKey: 'prefeituraId' });
Problema.belongsTo(Prefeitura);

// (async () => {
//   await Problema.sync({ force: true });
// })();

export default Problema;
