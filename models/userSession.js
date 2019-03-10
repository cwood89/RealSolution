module.exports = function (sequelize, DataTypes) {
  var UserSession = sequelize.define("userSession",
    {
      userID: DataTypes.STRING,
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.Now
      }
    });
  return UserSession;
}