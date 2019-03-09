const bcrypt = require("bcrypt");
const saltRounds = 10;

function getHash(user) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(user.get('password'), salt, (err, hash) => {
        if (err) console.log(err);
        resolve(hash);
      });
    });
  });
}

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }
  );
  // hashes password before saving to db
  User.addHook('beforeCreate', (user, options) => {
    return getHash(user)
      .then(hash => user.set('password', hash))
  });
  // compares hashes 
  User.validPassword = async function (password, hash) {
    return await bcrypt.compare(password, hash).then(function (res) {
      console.log(res)
      return res;
    });
  }
  return User;
};