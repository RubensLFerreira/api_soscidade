import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';


const Sexo = sequelize.define('sexo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sexo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sexo_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

export default Sexo;
