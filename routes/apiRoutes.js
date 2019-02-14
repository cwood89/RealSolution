var db = require("../models");
const otl = rerequire("../function/OTL.js");
module.exports = function(app) {
    db.Subject_finds.findAll({}).then(function(data) {
      //1.Using a loop to apply the otl function and get offer2list value;
      //2 put the new entry to the table subject_otlist

    });
  
  // Delete an example by id
};
