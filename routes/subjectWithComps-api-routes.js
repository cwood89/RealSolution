var db = require("../models");

const subjectDrop = (req,res,next) =>{
    db.subject_finds.destroy({where:{}});
    next();
}

module.exports = function(app) {
    app.get("/api/subjectFinds",subjectDrop,async function(req, res) {
    var QUERY = "SELECT customerListings.* , rent_ests.est_rent, sale_est.est_sale "+
                "FROM customerListings "+
                "JOIN rent_ests on customerListings.FMLS = rent_ests.subject "+
                "JOIN sale_ests on customerListings.FMLS = sale_ests.subject;"

  await db.sequelize.query(QUERY,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                
                if(data){
                    for (i=0;i<data.length;i++){
                        db.subject_finds.create({
                            FMLS:data[i].FMLS,
                            Address: data[i].Address,
                            City:data[i].City,
                            Zip:data[i].Zip,
                            Sub:data[i].Sub,
                            Y:data[i].Y,
                            B:data[i].B,
                            B_F:data[i].B_F,
                            B_H:data[i].B_H,
                            SQFT:data[i].SQFT,
                            Price:data[i].Price,
                            Hoa:data[i].Hoa,
                            F:data[i].F,
                            DOM:data[i].DOM,
                            est_rent:data[i].est_rent,
                            est_sale:data[i].est_rent
                          })
                    }
                }
        })

   res.send("success")

    })
}