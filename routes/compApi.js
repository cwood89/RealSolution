var db = require("../models");

module.exports = function (app) {

  app.get("/api/comps/:id", async function (req, res) {
    let rentalComps = await db.rent_finds.findAll({ attributes: ['comp_fmls', 'comp_address', 'comp_B', 'comp_size', 'comp_year', 'psf'], where: { subject: req.params.id } }).then(function (data) {
      return data;
    });

    let saleComps = await db.sale_finds.findAll({ attributes: ['comp_fmls', 'comp_address', 'comp_B', 'comp_size', 'comp_year', 'market_value', 'psf'], where: { subject: req.params.id } }).then(function (data) {
      return data;
    });

    //split this into rental and sale arrays, right now they are concatenated into one thing.

    let data = [
      {sale: saleComps},
      {rent: rentalComps}
    ]
    res.json(data)
  });
};