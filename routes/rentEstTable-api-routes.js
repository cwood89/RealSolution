var db = require("../models");

const rentEstDrop = async (req,res,next) =>{
    await db.rent_ests.destroy({where:{}}).then(next);
}

module.exports = function(app) {
    app.get("/api/rentEst",rentEstDrop,async function(req, res) {
    var QUERY = 
        "WITH min_year as "+
        "( "+
        "SELECT subject, subject_sub, bedrooms, size, year_build, size * psf as est_sale, market_value as comp_sale "+
        "FROM sale_finds "+
        "WHERE year_diff in (SELECT MIN(year_diff) FROM sale_finds GROUP BY subject) "+ 
        ") "+

        "SELECT subject, subject_sub, bedrooms, size, year_build,est_sale, comp_sale "+
        "FROM min_year "+
        "WHERE est_sale IN ( SELECT max(est_sale) FROM min_year GROUP BY subject);"
  await db.sequelize.query(QUERY,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                
                if(data){
                    for (i=0;i<data.length;i++){
                        db.rent_ests.create({
                            subject:data[i].subject,
                            subject_sub:data[i].subject_sub,
                            bedrooms:data[i].bedrooms,
                            size:data[i].size,
                            year_build:data[i].year_build,
                            est_sale:data[i].est_sale,
                            comp_sale:data[i].comp_sale
                          })
                    }
                }
        })

   res.send("success")

    })
}