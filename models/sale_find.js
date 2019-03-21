module.exports = function(sequelize, DataTypes) {
  var Sale_finds = sequelize.define("sale_finds", {
    subject: DataTypes.STRING,
    subject_sub: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    size:DataTypes.INTEGER,
    year_build:DataTypes.INTEGER,
    comp_fmls:{
      type:DataTypes.STRING,
      primarykey:true
    },
    comp_address:DataTypes.STRING,
    comp_B:DataTypes.INTEGER,
    comp_size:DataTypes.INTEGER,
    comp_year:DataTypes.INTEGER,
    market_value:DataTypes.INTEGER,
    psf:DataTypes.DECIMAL(10,4),
    size_diff:DataTypes.INTEGER,
    year_diff:DataTypes.INTEGER,
    comp_DOM:DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  });
  return Sale_finds;
};