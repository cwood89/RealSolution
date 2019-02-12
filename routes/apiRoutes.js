var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/subject", function(req, res) {
    db.Subject_finds.findAll({}).then(function(data) {
      res.json(data);
    });
  });
  // Delete an example by id
};
