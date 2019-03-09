module.exports = function (sequelize, DataTypes) {
  var UserSession = sequelize.define("userSession",
    {
      userID: DataTypes.STRING,
      timestame: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.Now
      }
    });
  return UserSession;
}