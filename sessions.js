const Sequelize = require("sequelize");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./models");

var mySessionStore = new SequelizeStore({
  db: db,
  table: "userSession",
});

// configure express session
module.exports = function (app) {
  app.use(session({
    secret: "realSolution",
    store: mySessionStore,
    saveUninitialized: false,
    resave: false,
    proxy: true
  })
  );

  // this will log user out if theres a cookie without a session usually happens when 
  app.use((req, res, next) => {
    console.log(req.cookies)
    if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');
    }
    next();
  });
}