const db = require("../models");
const otl = require("../function/OTL.js");

module.exports = function (app) {
  app.get("/api/subject_summary", function (req, res) {
    db.subject_otlists.findAll({
      order: [['otl', 'DESC']]
    }).then(function (data) {
      res.json(data)
    })
  })
}


