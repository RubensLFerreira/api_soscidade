var DataTypes = require("sequelize").DataTypes;
var _cidadao = require("./cidadao");
var _denuncia = require("./denuncia");
var _prefeitura = require("./prefeitura");

function initModels(sequelize) {
  var cidadao = _cidadao(sequelize, DataTypes);
  var denuncia = _denuncia(sequelize, DataTypes);
  var prefeitura = _prefeitura(sequelize, DataTypes);

  denuncia.belongsTo(cidadao, { as: "cidadao", foreignKey: "cidadao_id"});
  cidadao.hasMany(denuncia, { as: "denuncia", foreignKey: "cidadao_id"});
  denuncia.belongsTo(prefeitura, { as: "prefeitura", foreignKey: "prefeitura_id"});
  prefeitura.hasMany(denuncia, { as: "denuncia", foreignKey: "prefeitura_id"});

  return {
    cidadao,
    denuncia,
    prefeitura,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
