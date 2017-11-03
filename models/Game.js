module.exports = function(sequelize, DataTypes) {
  var Record = sequelize.define("Record", {
    user_name: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  
  Record.sync();

  return Record;
};
