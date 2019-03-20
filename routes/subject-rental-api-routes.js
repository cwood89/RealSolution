var db = require("../models");

module.exports = function (app) {
  app.get("/api/subject-finds/:id", function (req, res) {
    db.rent_finds.findAll({ attributes: ['comp_fmls', 'comp_B', 'comp_size', 'comp_year', 'rental'], where: { subject: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};