var db = require("../models");
//construct a middleware to re-structure data
var rentalComps;
var saleComps;

const dataCombine = (req,res,next)=>{

  db.rent_finds.findAll({attributes:['comp_fmls','comp_address','comp_B','comp_size','comp_year','rental','psf'],where:{subject:req.params.id}}).then(function(data) {
    rentalComps=data;
  });

  db.sale_finds.findAll({attributes:['comp_fmls','comp_address','comp_B','comp_size','comp_year','market_value','psf'],where:{subject:req.params.id}}).then(function(data) {
    saleComps=data;
  });

  next();

}

module.exports = function(app) {

  app.get("/subjectFinds/comps/:id", dataCombine,function(req, res) {
    res.render("comps",{rentalComps:rentalComps,saleComps:saleComps});
  });

  app.get('/', function(req, res) {
    res.render('landing', {})
  })

  app.get('/about', function(req, res) {
    res.render('about', {})
  })

};

  // Load example page and pass in an example by id
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
