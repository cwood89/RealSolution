module.exports = function(sequelize, DataTypes) {
  var subject_finds = sequelize.define("subject_finds", {
    FMLS:{
      type:DataTypes.STRING,
      primarykey:true
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
    DOM:DataTypes.INTEGER,
    est_rent:DataTypes.INTEGER,
    comp_rental:DataTypes.INTEGER
  });
  subject_finds.removeAttribute('id')
  subject_finds.removeAttribute('createdAt')
  subject_finds.removeAttribute('updatedAt')
  
  return subject_finds;
};
