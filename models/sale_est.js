module.exports = function(sequelize, DataTypes) {
    var sale_ests = sequelize.define("sale_ests", {
      subject:{
        type:DataTypes.STRING,
        primaryKey:true
      },
      est_sale:DataTypes.INTEGER,
      createdAt:{
        type:DataTypes.DATE
      },
      updatedAt:{
        type:DataTypes.DATE
      }
    });
    return sale_ests;
  };