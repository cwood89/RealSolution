module.exports = function(sequelize, DataTypes) {
    var sale_est = sequelize.define("sale_est", {
      subject:{
        type:DataTypes.STRING,
        primaryKey:true
      },
      subject_sub: DataTypes.STRING,
      bedrooms:DataTypes.INTEGER,
      size:DataTypes.INTEGER,
      year_build:DataTypes.INTEGER,
      est_sale:DataTypes.INTEGER,
      comp_sale:DataTypes.INTEGER,
      createdAt:{
        type:DataTypes.INTEGER,
        defaultValue:sequelize.NOW
      },
      updatedAt:{
        type:DataTypes.INTEGER,
        defaultValue:sequelize.NOW
      }
    });
    return sale_est;
  };