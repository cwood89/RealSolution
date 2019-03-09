const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },
  );

  function getHash(user) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(user.get('password'), salt, (err, hash) => {
          if (err)
            resolve(hash);
        });
      });
    });
  }

  User.addHook('beforeCreate', (user, options) => {
    console.log('hook fired');
    console.log(user);
    return getHash(user)
      .then(hash => user.set('password', hash))
  });
  return User;
};