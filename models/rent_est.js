module.exports = function(sequelize, DataTypes) {
    var rent_est = sequelize.define("rent_est", {
      subject:{
        type:DataTypes.STRING,
        primaryKey:true
      },
      subject_sub: DataTypes.STRING,
      bedrooms:DataTypes.INTEGER,
      size:DataTypes.INTEGER,
      year_build:DataTypes.INTEGER,
      est_rent:DataTypes.INTEGER,
      comp_rent:DataTypes.INTEGER,
      createdAt:{
        type:DataTypes.INTEGER,
        defaultValue:sequelize.NOW
      },
      updatedAt:{
        type:DataTypes.INTEGER,
        defaultValue:sequelize.NOW
      }
    });
    return rent_est;
  };