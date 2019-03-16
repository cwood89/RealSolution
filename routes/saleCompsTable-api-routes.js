var db = require("../models");

const rentalcompDrop = (req,res,next) =>{
    db.sale_finds.destroy({where:{}});
    next();
}

module.exports = function(app) {
    app.get("/api/saleComps",rentalcompDrop,async function(req, res) {
    var QUERY = "SELECT customerListings.FMLS AS subject, customerListings.sub as subject_sub, customerListings.B as bedrooms, customerListings.SQFT as size, customerListings.Y as year_build, sales.FMLS as comp_fmls, sales.Address as comp_address, sales.B as comp_B, sales.sqft as comp_size,sales.Y as comp_year ,sales.price as market_value, round(sales.price/sales.sqft,2) as psf, sales.sqft - customerListings.sqft as size_diff, sales.Dom as comp_DOM"+
                " FROM customerListings"+
                " join sales on ( upper(sales.sub) LIKE CONCAT('%', upper(customerListings.sub), '%') or upper(customerListings.sub) LIKE CONCAT('%', upper(sales.sub), '%') )and customerListings.zip = sales.zip"+
                " where customerListings.sub not in ('n/a','None','na') and ( customerListings.sqft < 1.1*sales.sqft ) and customerListings.Y >= sales.Y - 8 and sales.sqft != 0"+
                " ORDER BY customerListings.fmls, size_diff;"
  await db.sequelize.query(QUERY,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                
                if(data){
                    for (i=0;i<data.length;i++){
                        db.sale_finds.create({
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
                            market_value:data[i].market_value,
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