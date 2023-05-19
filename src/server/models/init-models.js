var DataTypes = require("sequelize").DataTypes;
var _cidadao = require("./cidadao");
var _localizacao = require("./localizacao");
var _prefeitura = require("./prefeitura");
var _problema = require("./problema");

function initModels(sequelize) {
  var cidadao = _cidadao(sequelize, DataTypes);
  var localizacao = _localizacao(sequelize, DataTypes);
  var prefeitura = _prefeitura(sequelize, DataTypes);
  var problema = _problema(sequelize, DataTypes);

  problema.belongsTo(cidadao, { as: "cidadao", foreignKey: "cidadao_id"});
  cidadao.hasMany(problema, { as: "problemas", foreignKey: "cidadao_id"});
  problema.belongsTo(localizacao, { as: "localizacao", foreignKey: "localizacao_id"});
  localizacao.hasMany(problema, { as: "problemas", foreignKey: "localizacao_id"});
  problema.belongsTo(prefeitura, { as: "prefeitura", foreignKey: "prefeitura_id"});
  prefeitura.hasMany(problema, { as: "problemas", foreignKey: "prefeitura_id"});

  return {
    cidadao,
    localizacao,
    prefeitura,
    problema,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
