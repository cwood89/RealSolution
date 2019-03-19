var db = require("../models");

const saleEstDrop = async (req,res,next) =>{
    await db.sale_ests.destroy({where:{}}).then(next)
}

module.exports = function(app) {
    app.get("/api/saleEst",saleEstDrop,async function(req, res) {
    var QUERY =  
       
        "SELECT subject, subject_sub, bedrooms, size, year_build, size * avg(psf) as est_sale"+
        "FROM sale_finds "+
        "WHERE year_diff in (SELECT MIN(year_diff) FROM sale_finds WHERE bedrooms = comp_B GROUP BY subject) "+
        "GROUP BY subject"

  await db.sequelize.query(QUERY,{raw:true}).then( data=> {
    res.send(data)
                // if(data){
                //     for (i=0;i<data.length;i++){
                //         db.sale_ests.create({
                //             subject:data[i].subject,
                //             subject_sub:data[i].subject_sub,
                //             bedrooms:data[i].bedrooms,
                //             size:data[i].size,
                //             year_build:data[i].year_build,
                //             est_sale:data[i].est_sale,
                //             comp_sale:data[i].comp_sale
                //           })
                //     }
                // }
        })

   

    })
}