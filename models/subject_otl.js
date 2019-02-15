const otl = require("../function/subject_otl.js");

module.exports = function(sequelize, DataTypes) {
  var subject_otlists = sequelize.define("subject_otlists", {
    subject:{
      type:DataTypes.STRING,
      primaryKey:true,
    },
    otl:DataTypes.DECIMAL,
      createdAt:DataTypes.DATE,
      updatedAt:DataTypes.DATE
  });
  
  // subject_otlists.associate = function(models) {
  //   subject_otlists.belongsTo(models.subject_finds,{foreignKey:'subject',targetKey:'FMLS'})
  // }
  
  return subject_otlists;
};