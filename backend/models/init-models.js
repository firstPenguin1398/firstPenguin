var DataTypes = require("sequelize").DataTypes;
var _Attendence = require("./Attendence");
var _Member = require("./Member");
var _WeeklyReport = require("./WeeklyReport");
var _freeboard = require("./freeboard");
var _members = require("./members");

function initModels(sequelize) {
  var Attendence = _Attendence(sequelize, DataTypes);
  var Member = _Member(sequelize, DataTypes);
  var WeeklyReport = _WeeklyReport(sequelize, DataTypes);
  var freeboard = _freeboard(sequelize, DataTypes);
  var members = _members(sequelize, DataTypes);


  return {
    Attendence,
    Member,
    WeeklyReport,
    freeboard,
    members,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
