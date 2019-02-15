var db = require("../models");
const otl = require("./OTL.js");
module.exports = function() {
    db.subject_finds.findAll({}).then(function(data) {
      //1.Using a loop to apply the otl function and get offer2list value;
      //2 put the new entry to the table subject_otlist
      for(i=0;i<data.length;i++){
        var rent = Math.max(data[i].est_rent,data[i].comp_rental);
        var marketValue = Math.max(data[i].est_sale,data[i].comp_sale)
        var rehab = 9000

        db.subject_otlist.create({
          subject:data[i].FMLS,
          otl:otl(data[i].Price,0.048,rent,marketValue,data[i].Y,rehab,data[i].Hoa,data[i].F,)
        })
      }
    });
  
  // Delete an example by id
};
