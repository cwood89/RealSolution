var db = require("../models");

module.exports = function (app) {

  // Create
  app.post("/api/favorites", (req, res) => {
    const { body } = req;
    const { user,
      listId
    } = body;
    db.user.findOne({
      where: {
        id: user
      }
    }).then((user) => {
      console.log("listId++++++++++++++++++++++++++")
      console.log(listId)
      console.log("+++++++++++++++++++++++++++")

      db.subject_otlists.findOne({ where: { subject: listId } }).then((listing) => {
        console.log("listing++++++++++++++++++++++++++")
        console.log(listing)
        console.log("+++++++++++++++++++++++++++")
        user.addFavorite(listing)
      })
      res.send({
        success: true,
        message: "Saved"
      })
    }).catch(err => {
      res.send({
        success: false,
        message: err
      })
    })
  }),

    // Read
    app.get("/api/favorites/:id", (req, res) => {
      const user = req.params.id
      db.user.find({
        include: [{
          model: db.subject_otlists,
          as: "favorites",
        }],
        where: user
      }).then(user => {
        console.log("USER++++++++++++++++++++")
        console.log(user)
        console; log("===========================")
        res.json(user)
      })
    }),

    // Update
    app.put("/api/favorites/:id", (req, res) => {
      // update listing
    }),

    // Delete
    app.delete("api/favorites/:id", (req, res) => {
      // delete listing
    })
}