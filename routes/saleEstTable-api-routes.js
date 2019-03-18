var db = require("../models");

const saleEstDrop = async (req,res) =>{
    await db.sale_est.destroy({where:{}});
    next();
}

module.exports = function(app) {
    app.get("/api/saleEst",saleEstDrop,async function(req, res) {
    var QUERY = 
        ";WITH min_year as ( "+
        "SELECT subject, subject_sub, bedrooms, size, year_build, size * psf as est_sale, market_value as comp_sale"+
        "FROM sale_finds "+
        "WHERE size_diff in (SELECT MIN(size_diff) FROM sale_finds GROUP BY subject)) "+
        "SELECT subject, subject_sub, bedrooms, size, year_build,est_sale, comp_sale "+
        "FROM min_year "+
        "WHERE est_sale IN ( SELECT max(est_sale) FROM min_year GROUP BY subject);"
  await db.sequelize.query(QUERY,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                
                if(data){
                    for (i=0;i<data.length;i++){
                        db.sale_est.create({
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