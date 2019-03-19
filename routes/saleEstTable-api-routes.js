var db = require("../models");

const saleEstDrop = async (req,res,next) =>{
    await db.sale_ests.destroy({where:{}}).then(next)
}

module.exports = function(app) {
    app.get("/api/saleEst",saleEstDrop,async function(req, res) {
    var QUERY =  
       
        "SELECT subject, avg(size) * avg(psf) as est_sale "+
        "FROM sale_finds "+
        "WHERE (year_diff in (SELECT MIN(year_diff) FROM sale_finds GROUP BY subject)) and WHERE bedrooms = comp_B "+
        "GROUP BY subject "

  await db.sequelize.query(QUERY,{raw:false,type:db.sequelize.QueryTypes.SELECT}).then( data=> {
    
                if(data){
                    for (i=0;i<data.length;i++){
                         db.sale_ests.create({
                            subject:data[i].subject,
                            est_sale:data[i].est_sale,
                          })
                    }
                }
        })

        res.send("success")
    })

    
}