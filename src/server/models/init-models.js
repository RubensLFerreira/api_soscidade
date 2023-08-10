var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _cidadao = require("./cidadao");
var _localizacao = require("./localizacao");
var _perfil = require("./perfil");
var _prefeitura = require("./prefeitura");
var _problema = require("./problema");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var cidadao = _cidadao(sequelize, DataTypes);
  var localizacao = _localizacao(sequelize, DataTypes);
  var perfil = _perfil(sequelize, DataTypes);
  var prefeitura = _prefeitura(sequelize, DataTypes);
  var problema = _problema(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  problema.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id"});
  categoria.hasMany(problema, { as: "problemas", foreignKey: "categoria_id"});
  problema.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  cidadao.hasMany(problema, { as: "problemas", foreignKey: "cidadao_id"});
  problema.belongsTo(localizacao, { as: "localizacao", foreignKey: "localizacao_id"});
  localizacao.hasMany(problema, { as: "problemas", foreignKey: "localizacao_id"});
  usuario.belongsTo(perfil, { as: "perfil", foreignKey: "perfil_id"});
  perfil.hasMany(usuario, { as: "usuarios", foreignKey: "perfil_id"});
  problema.belongsTo(prefeitura, { as: "prefeitura", foreignKey: "prefeitura_id"});
  prefeitura.hasMany(problema, { as: "problemas", foreignKey: "prefeitura_id"});
  cidadao.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(cidadao, { as: "cidadaos", foreignKey: "usuario_id"});
  prefeitura.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(prefeitura, { as: "prefeituras", foreignKey: "usuario_id"});

  return {
    categoria,
    cidadao,
    localizacao,
    perfil,
    prefeitura,
    problema,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
