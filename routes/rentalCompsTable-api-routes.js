var db = require("../models");

const rentalcompDrop = (req,res,next) =>{
    db.rent_finds.destroy({where:{}});
    next();
}

module.exports = function(app) {
    app.get("/api/rentalComps",rentalcompDrop,async function(req, res) {
    var QUERY = "SELECT customerListings.FMLS AS subject, customerListings.sub as subject_sub, customerListings.B as bedrooms, customerListings.SQFT as size, customerListings.Y as year_build, rentals.fmls as comp_fmls, rentals.Address as comp_address, rentals.B as comp_B, rentals.sqft as comp_size,rentals.Year as comp_year ,rentals.price as rental, round(rentals.price/rentals.sqft,2) as psf, rentals.sqft - customerListings.sqft as size_diff, rentals.Dom as comp_DOM"+
                " FROM customerListings"+
                " join rentals on ( upper(rentals.sub) LIKE CONCAT('%', upper(customerListings.sub), '%') or upper(customerListings.sub) LIKE CONCAT('%', upper(rentals.sub), '%') )and customerListings.zip = rentals.zip"+
                " where customerListings.sub not in ('n/a','None','na') and ( customerListings.sqft < 1.1*rentals.sqft ) and customerListings.Y >= rentals.YEAR - 10 and rentals.sqft != 0"+
                " ORDER BY customerListings.fmls, size_diff;"
  await db.sequelize.query(QUERY,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                
                if(data){
                    for (i=0;i<data.length;i++){
                        db.rent_finds.create({
                            subject:data[i].subject,
                            subject_sub:data[i].subject_sub,
                            bedrooms:data[i].bedrooms,
                            size:data[i].size,
                            year_build:data[i].year_build,
                            comp_fmls:data[i].comp_fmls,
                            comp_address:data[i].comp_address,
                            comp_B:data[i].comp_B,
                            comp_size:data[i].comp_size,
                            comp_year:data[i].comp_year,
                            rental:data[i].rental,
                            psf:data[i].psf,
                            size_diff:data[i].size_diff,
                            comp_DOM: data[i].comp_DOM
                          })
                    }
                }
                
        })

   res.send("success")

    })
}