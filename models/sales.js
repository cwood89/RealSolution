module.exports = function(sequelize, DataTypes) {
    var sales = sequelize.define("sales", {
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
      CloseDate:DataTypes.STRING,
      Taxes:DataTypes.INTEGER,
      createdAt:DataTypes.DATE,
      updatedAt:DataTypes.DATE
    });
    return sales;
  };