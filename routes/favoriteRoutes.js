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
      db.subject_otlists.findOne({ where: { subject: listId } }).then((listing) => {
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
      const userId = req.params.id
      db.user.findAll({
        where: { id: userId },
        include: [{
          model: db.subject_otlists,
          as: "favorites",
        }]

      }).then(user => {
        res.json(user)
      })
    }),

    // Update
    app.put("/api/favorites/:id", (req, res) => {
      // update listing
    }),

    // Delete
    app.delete("api/favorites/:id", (req, res) => {
      db.UserFavorites.destroy({ where: { exerciseId: 1856, } })
    })
}