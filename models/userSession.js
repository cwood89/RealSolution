module.exports = function (sequelize, DataTypes) {
  var UserSession = sequelize.define("userSession", {
    sid: {
      type: DataTypes.STRING(36),
      primaryKey: true
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT
  });
  return UserSession;
}