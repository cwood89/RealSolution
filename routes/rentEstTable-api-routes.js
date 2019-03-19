var db = require("../models");

const rentEstDrop = async (req,res,next) =>{
    await db.rent_ests.destroy({where:{}}).then(next);
}

module.exports = function(app) {
    app.get("/api/rentEst",rentEstDrop,async function(req, res) {
    var QUERY = 

    "SELECT subject, avg(size) * avg(psf) as est_rent "+
    "FROM rent_finds "+
    "WHERE (size_diff in (SELECT MIN(size_diff) FROM rent_finds GROUP BY subject)) and WHERE bedrooms = comp_B "+
    "GROUP BY subject "

  await db.sequelize.query(QUERY,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {            

                if(data){
                    for (i=0;i<data.length;i++){
                        db.rent_ests.create({
                            subject:data[i].subject,
                            est_sale:data[i].est_sale,
                          })
                    }
                }
        })

        res.send("success")
    })

    
}