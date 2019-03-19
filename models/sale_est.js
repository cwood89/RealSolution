module.exports = function(sequelize, DataTypes) {
    var sale_ests = sequelize.define("sale_ests", {
      subject:{
        type:DataTypes.STRING,
        primaryKey:true
      },
      est_sale:DataTypes.INTEGER,
      createdAt:{
        type:DataTypes.DATE,
        defaultValue:sequelize.NOW
      },
      updatedAt:{
        type:DataTypes.DATE,
        defaultValue:sequelize.NOW
      }
    });
    return sale_ests;
  };