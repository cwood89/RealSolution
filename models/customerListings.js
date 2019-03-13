module.exports = function(sequelize, DataTypes) {
  var customerListings = sequelize.define("customerListings", {
    FMLS:{
      type:DataTypes.STRING,
      primaryKey:true
    },
    Address: DataTypes.STRING,
    City:DataTypes.STRING,
    County:DataTypes.STRING,
    Zip:DataTypes.STRING,
    Sub: DataTypes.STRING,
    Y:DataTypes.INTEGER,
    B:DataTypes.INTEGER,
    B_F:DataTypes.INTEGER,
    B_H:DataTypes.INTEGER,
    SQFT:DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    Hoa:DataTypes.INTEGER,
    F:DataTypes.STRING,
    DOM:DataTypes.INTEGER,
    Taxes:DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  });
  return customerListings;
};
