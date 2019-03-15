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
const customerListingsDrop = (req,res,next) =>{
    db.customerListings.destroy({where:{}});
    next();
}

module.exports = function(app) {
    app.get("/api/customerListing",customerListingsDrop, async function(req, res) {
       await ref.on("child_added", function(snapshot) {
            var element = snapshot.val()
            db.customerListings.create({
            FMLS:element.FMLS,
            Address: element.FMLS,
            City:element.City,
            County:element.County,
            Zip:element.Zip,
            Sub: element.Sub,
            Y:element.Y,
            B:element.B,
            B_F:element.B_F,
            B_H:element.B_H,
            SQFT:element.SQFT,
            Price: element.Price,
            Hoa:element.Hoa,
            F:element.F,
            DOM:element.DOM,
            Taxes:element.Taxes})
        })

        res.send("success")
    })
}