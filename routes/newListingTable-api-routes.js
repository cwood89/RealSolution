var db = require("../models");
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("../config/serviceAccount.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://atlnewlisting.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var dbfirebase = admin.database();
var ref = dbfirebase.ref("newListing");


//drop all the records first
const newListingDrop = (req,res,next) =>{
    db.newListings.destroy({where:{}});
    next();
}

module.exports = function(app) {
    app.get("/api/newlisting",newListingDrop,function(req, res) {
        ref.once("value", function(snapshot) {
            console.log("snapshot "+snapshot.val());
            res.send(snapshot.val());
        });
    })
}