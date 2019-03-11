module.exports = function(sequelize, DataTypes) {
  var newListings = sequelize.define("newListings", {
    FMLS:{
      type:DataTypes.STRING,
    },
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
    Hoa:DataTypes.INTEGER,
    F:DataTypes.STRING,
    DOM:DataTypes.INTEGER,
    Taxes:DataTypes.INTEGER,
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  });
  
  return newListings;
};
