module.exports = function(sequelize, DataTypes) {
  var subject_otlist = sequelize.define("subject_otlist", {
    subject: DataTypes.STRING,
    otl:DataTypes.INTEGER,
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true
      },
      createdAt:DataTypes.DATE,
      updatedAt:DataTypes.DATE
  });

  subject_otlist.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    subject_otlist.belongsTo(models.subject_finds, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return subject_otlist;
};