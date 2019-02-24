module.exports = function(sequelize, DataTypes) {
  var subject_finds = sequelize.define("subject_finds", {
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
    est_rent:DataTypes.INTEGER,
    comp_rental:DataTypes.INTEGER,
    est_sale:DataTypes.INTEGER,
    comp_sale:DataTypes.INTEGER,
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  });
  
  // subject_finds.associate = function(models) {
  //   subject_finds.hasMany(models.subject_otlists,{foreignKey:'subject',sourceKey:'FMLS'})
  // }
  
  return subject_finds;
};
