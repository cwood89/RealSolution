module.exports = function(sequelize, DataTypes) {
  var Rent_finds = sequelize.define("rent_finds", {
    subject: DataTypes.STRING,
    subject_sub: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    size:DataTypes.INTEGER,
    year_build:DataTypes.INTEGER,
    comp_fmls:{
      type:DataTypes.STRING,
      primarykey:true
    },
    comp_B:DataTypes.INTEGER,
    comp_size:DataTypes.INTEGER,
    comp_year:DataTypes.INTEGER,
    rental:DataTypes.INTEGER,
    psf:DataTypes.INTEGER,
    size_diff:DataTypes.INTEGER,
    comp_DOM:DataTypes.INTEGER,
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  });
 
  return Rent_finds;
};