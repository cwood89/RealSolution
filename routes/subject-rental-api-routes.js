var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/subjectFinds/subject/:id", function (req, res) {
    db.rent_finds.findAll({ attributes: ['comp_fmls', 'comp_B', 'comp_size', 'comp_year', 'rental'], where: { subject: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  // Load example page and pass in an example by id
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};