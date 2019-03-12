var db = require("../models");

module.exports = function (app) {
  // middleware function to check for logged-in users
  const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      res.redirect('/otl');
    } else {
      next();
    }
  };

  app.post("/api/signup", sessionChecker, (req, res) => {
    // grabbing sent data from sign-up form========
    const { body } = req;
    const {
      firstName,
      lastName,
      password
    } = body;
    let userEmail = req.body.email;
    userEmail = userEmail.toLowerCase();
    // verifying if data is present=======
    if (!firstName) {
      return res.send({
        success: false,
        message: "First name is required."
      })
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: "Last name is required."
      })
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Password is required."
      })
    }
    if (!userEmail) {
      return res.send({
        success: false,
        message: "Email is required."
      })
    }
    // checking if user already exists================
    db.user.findAll({
      where: {
        email: userEmail
      }
    }).then((results) => {
      console.log(results.length);
      // if not
      if (results.length < 1) {

        db.user.create({
          firstName: firstName,
          lastName: lastName,
          email: userEmail,
          password: password
        }).then(() => {
          res.redirect("/login")
          return res.send({
            success: true,
            message: "Signed Up!"
          })
        }).catch((err) => {
          console.log(err)
        })
      } else {
        return res.send({
          success: false,
          message: "Account already exists."
        })
      }
    }).catch((err) => {
      console.log(err);
      return res.send({
        success: false,
        message: "Server Error"
      })
    })
  })
  app.post("/api/login", sessionChecker, async (req, res) => {
    // grabbing data=================
    const { body } = req;
    const { password } = body;
    let userEmail = req.body.email;
    userEmail = userEmail.toLowerCase();
    // verifying if data is present=======
    if (!userEmail) {
      return res.send({
        success: false,
        message: "Email is required."
      })
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Password is required."
      })
    }
    // checking for user
    await db.user.findAll({
      where: {
        email: userEmail
      }
    }).then(async (results) => {
      if (results.length != 1) {
        return res.send({
          success: false,
          message: "System Failure!"
        })
      }
      // validating password
      if (! await db.user.validPassword(password, results[0].password)) {
        return res.send({
          success: false,
          message: "Invalid Password"
        })
      } else {
        // creating a session
        let user = results[0].dataValues;
        req.session.user = user;
        console.log(req.session)
        res.redirect("/otl");
      }
    }).catch((err) => {
      console.log(err);
      return res.send({
        success: false,
        message: "Server Error"
      })
    })

  })

  app.get("/api/logout", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  })
  // app.get("/api/signup", (req, res) => {
  //   // save data user data to database
  //   // verify data check against existing data
  // })

  // app.get("/api/login", (req, res) => {
  //   // check for token

  //   // redirect
  // })



}