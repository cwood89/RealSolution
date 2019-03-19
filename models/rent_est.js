module.exports = function(sequelize, DataTypes) {
    var rent_ests = sequelize.define("rent_ests", {
      subject:{
        type:DataTypes.STRING,
        primaryKey:true
      },
      est_rent:DataTypes.INTEGER,
      createdAt:{
        type:DataTypes.date,
        defaultValue:sequelize.NOW
      },
      updatedAt:{
        type:DataTypes.date,
        defaultValue:sequelize.NOW
      }
    });
    return rent_ests;
  };