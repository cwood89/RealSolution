var db = require("../models");

module.exports = function (app) {

  // Create
  app.post("/api/favorites", (req, res) => {
    const { body } = req;
    const { user,
      id
    }
    db.User.addSubject_otlists(req.params.id)
  }),

    // Read
    app.get("/api/favorites", (req, res) => {
      const { username } = req.body
      db.User.find({
        include: [{
          model: db.subject_otlists,
          as: "favorites",
        }],
        where: username
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