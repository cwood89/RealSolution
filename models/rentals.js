module.exports = function(sequelize, DataTypes) {
    var rentals = sequelize.define("rentals", {
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
      DOM:DataTypes.INTEGER,
      CloseDate:DataTypes.STRING,
      createdAt:DataTypes.DATE,
      updatedAt:DataTypes.DATE
    });
    return rentals;
  };