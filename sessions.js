const Sequelize = require("sequelize");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./models");

let twoHours = 1000 * 60 * 60 * 2;
let mySessionStore = new SequelizeStore({
  db: db,
  table: "userSession",
});

// configure express session
module.exports = function (app) {
  app.use(session({
    name: "sid",
    secret: "realSolution",
    store: mySessionStore,
    saveUninitialized: false,
    resave: false,
    proxy: true,
    cookie: {
      maxAge: twoHours,
      sameSite: true
    }
  })
  );

  // this will log user out if theres a cookie without a session usually happens when you restart server without logging out
  app.use((req, res, next) => {
    console.log(req.cookies)
    if (req.cookies.sid && !req.session.userId) {
      req.cookies.sid = "";
    }
    next();
  });
}