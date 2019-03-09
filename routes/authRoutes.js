var db = require("../models");

module.exports = function (app) {

  app.get("/api/signup", (req, res) => {
    // grabbing sent data from sign-up form========
    const { body } = req;
    const {
      firstName,
      lastName,
      password
    } = body;
    let email = req.body.email;
    email = email.toLowerCase();
    // verifying if data is present=======
    if (!firstName) {
      res.send({
        success: false,
        message: "First name is required."
      })
    }
    if (!lastName) {
      res.send({
        success: false,
        message: "Last name is required."
      })
    }
    if (!password) {
      res.send({
        success: false,
        message: "Password is required."
      })
    }
    if (!email) {
      res.send({
        success: false,
        message: "Email is required."
      })
    }
    db.user.findAll({ email: email }).then((err, dbUsers) => {
      if (err) {
        res.send({
          success: false,
          message: "Server Error: Database"
        })
      } else if (dbUsers.length > 1) {
        res.send({
          success: false,
          message: "Account already exists."
        })
      }
    })

    db.user.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })

  })

  // app.post("/api/signup", (req, res) => {
  //   // save data user data to database
  //   // verify data check against existing data
  // })

  // app.get("/api/login", (req, res) => {
  //   // check for token

  //   // redirect
  // })

  // app.post("/api/login", (req, res) => {
  //   // assign token
  // })

  // app.post("/api/verify", (req, res) => {
  //   // get token 
  //   // verify token
  // })
  // app.post("/api/signoout", (req, res) => {
  //   // kill session
  // })


}