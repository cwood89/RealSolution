var db = require("../models");
const otl = require("../function/OTL.js");
 
module.exports = function(app) {
  app.get("/api/subject/finds",function(req, res) {
    db.subject_finds.findAll({}).then(function(data){
      var list = [];
      for(i=0;i<data.length;i++){
        var summary = {info:'',o2l:'',gy_comp:[]}
        var rent = Math.max(data[i].est_rent,data[i].comp_rental);
        var marketValue = Math.max(data[i].est_sale,data[i].comp_sale)
        var rehab = 9000;
        summary.info = data[i]
        summary.o2l=otl(data[i].Price,0.048,rent,marketValue,data[i].Y,rehab,data[i].Hoa,data[i].F,)
        db.rent_finds.findAll({attributes:['comp_fmls'],where:{'subject':data[i].FMLS}}).then(function(comp){
          if (comp){
            for(j=0;j<comp.length;j++){
              //console.log(comp[j].dataValues)
              summary.gy_comp[j]=comp[j].dataValues
              console.log(summary.gy_comp[j])
            }
          }else{
            summary.gy_comp.push('NULL')
            console.log('nothing find')
          }
        })
        //looks like list doesn't wait on summary.gy_comp
        list.push(summary);
      }
      res.send(list)
      }) 
    })
  }
  

  // app.get("/api/subject/summary/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.subject_finds.findOne({
  //     where: {
  //       FMLS: req.params.id
  //     },
  //     include: [db.Post]
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.post("/api/authors", function(req, res) {
  //   db.Author.create(req.body).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

  // app.delete("/api/authors/:id", function(req, res) {
  //   db.Author.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });


