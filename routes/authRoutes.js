var db = require("../models");

module.exports = function (app) {

  app.post("/api/signup", (req, res) => {
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
    db.user.findAll({ where: { email: userEmail } }).then((results) => {
      console.log(results);
      if (results.length > 1) {
        return res.send({
          success: false,
          message: "Account already exists."
        })
      } else {
        db.user.create({
          firstName: firstName,
          lastName: lastName,
          email: userEmail,
          password: password
        })
        console.log(db.user)
        return res.send({
          success: true,
          message: "Signed Up!"
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

  app.post("/api/login", (req, res) => {
    const { body } = req;
    const { password } = body;
    let userEmail = req.body.email;
    userEmail = userEmail.toLowerCase();

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
    db.user.findAll({ where: { email: userEmail } }).then(async (results) => {
      if (results.length != 1) {
        return res.send({
          success: false,
          message: "System Failure!"
        })
      }
      if (! await db.user.validPassword(password, results[0].password)) {
        return res.send({
          success: false,
          message: "Invalid Password"
        })
      } else {
        let user = results[0].dataValues;
        db.userSession.create({ userId: user.id }).then((results) => {
          console.log(results);
          res.send({
            success: true,
            message: "Signed in",
            token: user.id
          })
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
  // app.get("/api/signup", (req, res) => {
  //   // save data user data to database
  //   // verify data check against existing data
  // })

  // app.get("/api/login", (req, res) => {
  //   // check for token

  //   // redirect
  // })


  // app.post("/api/verify", (req, res) => {
  //   // get token 
  //   // verify token
  // })
  // app.post("/api/signoout", (req, res) => {
  //   // kill session
  // })


}