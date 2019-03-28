const db = require("../models");
const otl = require("../function/OTL.js");

//drop all the records first
const otlDrop = (req, res, next) => {
  db.subject_otlists.destroy({ where: {} });
  next();
}

//make subject_otl as an middleware, create a offer to list table of the subjects 
const otlTable = async (req, res, next) => {

 await db.subject_finds.findAll({}).then(function (data) {
    //1.Using a loop to apply the otl function and get offer2list value;
    //2 put the new entry to the table subject_otlist
    for (i = 0; i < data.length; i++) {
      var rent = Math.max(data[i].est_rent, data[i].comp_rental);
      var marketValue = Math.max(data[i].est_sale, data[i].comp_sale)
      var rehab = 9000

      //tax function can go here

      db.subject_otlists.create({
        subject: data[i].FMLS,
        otl: otl(data[i].Price, 0.048, rent, marketValue, data[i].Y, rehab, data[i].Hoa, data[i].F),
        Address: data[i].Address,
        City: data[i].City,
        Zip: data[i].Zip,
        Sub: data[i].Sub,
        Y: data[i].Y,
        B: data[i].B,
        B_F: data[i].B_F,
        B_H: data[i].B_H,
        SQFT: data[i].SQFT,
        Price: data[i].Price,
        est_rent: data[i].est_rent,
        comp_rental: data[i].comp_rental,
        est_sale: data[i].est_sale,
        comp_sale: data[i].comp_sale,
      })
    }
  });
  next();
};

module.exports = function (app) {
  app.get("/api/subject_otlists", otlDrop, otlTable, function (req, res) {
    db.subject_otlists.findAll({
      order: [['otl', 'DESC']]
    }).then(function (results) {
      res.json(results)
    })
  })
}