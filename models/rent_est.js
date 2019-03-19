module.exports = function(sequelize, DataTypes) {
    var rent_ests = sequelize.define("rent_ests", {
      subject:{
        type:DataTypes.STRING,
        primaryKey:true
      },
      est_rent:DataTypes.INTEGER,
      createdAt:{
        type:DataTypes.DATE
      },
      updatedAt:{
        type:DataTypes.DATE
      }
    });
    return rent_ests;
  };