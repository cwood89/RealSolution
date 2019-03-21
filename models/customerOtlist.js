
module.exports = function(sequelize, DataTypes) {
  var customerOtlists = sequelize.define("customerOtlists", {
   subject:{
      type:DataTypes.STRING,
      primaryKey:true,
    },
    otl:DataTypes.DECIMAL,
    Address: DataTypes.STRING,
    City:DataTypes.STRING,
    Zip:DataTypes.STRING,
    Sub: DataTypes.STRING,
    Y:DataTypes.INTEGER,
    B:DataTypes.INTEGER,
    B_F:DataTypes.INTEGER,
    B_H:DataTypes.INTEGER,
    SQFT:DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    est_rent:DataTypes.INTEGER,
    est_sale:DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  });
  return customerOtlists;
};