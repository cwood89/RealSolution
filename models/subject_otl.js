
module.exports = function (sequelize, DataTypes) {
  var subject_otlists = sequelize.define("subject_otlists", {
    subject: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    otl: DataTypes.DECIMAL,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    Zip: DataTypes.STRING,
    Sub: DataTypes.STRING,
    Y: DataTypes.INTEGER,
    B: DataTypes.INTEGER,
    B_F: DataTypes.INTEGER,
    B_H: DataTypes.INTEGER,
    SQFT: DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    est_rent: DataTypes.INTEGER,
    comp_rental: DataTypes.INTEGER,
    est_sale: DataTypes.INTEGER,
    comp_sale: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  subject_otlists.associate = (models) => {
    subject_otlists.belongsToMany(models.user, {
      through: "UserFavorites",
      as: "favorites",
      foriegnKey: "userId",
      constraints: false
    })
  }

  return subject_otlists;
};