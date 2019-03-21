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
    db.customerListings.destroy({where:{}}).then(next)    
}

//drop rental comps 
const rentalcompDrop = (req,res,next) =>{
    await db.rent_finds.destroy({where:{}});
    next();
}

//drop sale comps
const salecompDrop = (req,res,next) =>{
    await db.sale_finds.destroy({where:{}});
    next();
}

//drop rent estimation
const rentEstDrop = async (req,res,next) =>{
    await db.rent_ests.destroy({where:{}})
    next()
}

//drop sale estimation 
const saleEstDrop = async (req,res,next) =>{
    await db.sale_ests.destroy({where:{}}).then(next)
}

//drop the customer Listing output

const customerFindsDrop = (req,res,next) =>{
    db.customerFinds.destroy({where:{}}).then(next)
}

//drop all the customerOtl first
const customerOtlDrop = (req,res,next) =>{
    db.customerOtlists.destroy({where:{}}).then(next)
}


module.exports = function(app) {
    app.get("/api/customerData",customerListingsDrop,rentalcompDrop,salecompDrop,rentEstDrop,saleEstDrop,customerFindsDrop,customerOtlDrop,async function(req, res) {

    var QUERY1 = "SELECT customerListings.FMLS AS subject, customerListings.sub as subject_sub, customerListings.B as bedrooms, customerListings.SQFT as size, customerListings.Y as year_build, rentals.fmls as comp_fmls, rentals.Address as comp_address, rentals.B as comp_B, rentals.sqft as comp_size,rentals.Y as comp_year ,rentals.Price as rental, round(rentals.price/rentals.sqft,2) as psf, abs(rentals.sqft - customerListings.sqft) as size_diff, abs(rentals.Y - customerListings.Y) as year_diff,rentals.Dom as comp_DOM"+
               " FROM customerListings"+
               " join rentals on ( upper(rentals.sub) LIKE CONCAT('%', upper(customerListings.sub), '%') or upper(customerListings.sub) LIKE CONCAT('%', upper(rentals.sub), '%') )and customerListings.zip = rentals.zip"+
               " where customerListings.sub not in ('n/a','None','na') and ( customerListings.sqft < 1.1*rentals.sqft ) and customerListings.Y >= rentals.Y - 10 and rentals.sqft != 0"+
               " ORDER BY customerListings.fmls, size_diff, year_diff;" 
    var QUERY2= 
               "SELECT subject, avg(size) * avg(psf) as est_rent "+
               "FROM rent_finds "+
               "WHERE size_diff in (SELECT MIN(size_diff) FROM rent_finds GROUP BY subject) AND bedrooms = comp_B "+
               "GROUP BY subject "

    var QUERY3 = "SELECT customerListings.FMLS AS subject, customerListings.sub as subject_sub, customerListings.B as bedrooms, customerListings.SQFT as size, customerListings.Y as year_build, sales.FMLS as comp_fmls, sales.Address as comp_address, sales.B as comp_B, sales.sqft as comp_size,sales.Y as comp_year ,sales.price as market_value, round(sales.price/sales.sqft,2) as psf, abs(sales.sqft - customerListings.sqft) as size_diff, abs(sales.Y - customerListings.Y) as year_diff, sales.Dom as comp_DOM"+
               " FROM customerListings" +
               " join sales on ( upper(sales.sub) LIKE CONCAT('%', upper(customerListings.sub), '%') or upper(customerListings.sub) LIKE CONCAT('%', upper(sales.sub), '%') )and customerListings.zip = sales.zip"+
               " where customerListings.sub not in ('n/a','None','na') and ( customerListings.sqft < 1.1* sales.sqft ) and customerListings.Y >= sales.Y - 8 and sales.sqft != 0"+
               " ORDER BY customerListings.fmls, size_diff, year_diff;"

    var QUERY4 = "SELECT subject, avg(size) * avg(psf) as est_sale "+
                 "FROM sale_finds "+
                 "WHERE year_diff in (SELECT MIN(year_diff) FROM sale_finds GROUP BY subject ) AND bedrooms = comp_B "+
                 "GROUP BY subject "
       
    var QUERY5 = "SELECT customerListings.* , rent_ests.est_rent, sale_ests.est_sale "+
                 "FROM customerListings "+
                 "JOIN rent_ests on customerListings.FMLS = rent_ests.subject "+
                 "JOIN sale_ests on customerListings.FMLS = sale_ests.subject;"

   //update the customerListings
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
  
   //update the rentalComps
   await db.sequelize.query(QUERY1,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {     
               if(data){
                  for (i=0;i<data.length;i++){
            db.rent_finds.create({
                subject:data[i].subject,
                subject_sub:data[i].subject_sub,
                bedrooms:data[i].bedrooms,
                size:data[i].size,
                year_build:data[i].year_build,
                comp_fmls:data[i].comp_fmls,
                comp_address:data[i].comp_address,
                comp_B:data[i].comp_B,
                comp_size:data[i].comp_size,
                comp_year:data[i].comp_year,
                rental:data[i].rental,
                psf:data[i].psf,
                size_diff:data[i].size_diff,
                year_diff:data[i].year_diff,
                comp_DOM: data[i].comp_DOM
              })
                  }
                 }
        })
   //update the rental estimation
   await db.sequelize.query(QUERY2,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {            

               if(data){
                  for (i=0;i<data.length;i++){
                     db.rent_ests.create({
                     subject:data[i].subject,
                     est_rent:data[i].est_rent,
                    })
                  }
                 }
        })
   //update the saleComps
   await db.sequelize.query(QUERY3,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                
               if(data){
                 for (i=0;i<data.length;i++){
                    db.sale_finds.create({
                    subject:data[i].subject,
                    subject_sub:data[i].subject_sub,
                    bedrooms:data[i].bedrooms,
                    size:data[i].size,
                    year_build:data[i].year_build,
                    comp_fmls:data[i].comp_fmls,
                    comp_address:data[i].comp_address,
                    comp_B:data[i].comp_B,
                    comp_size:data[i].comp_size,
                    comp_year:data[i].comp_year,
                    market_value:data[i].market_value,
                    psf:data[i].psf,
                    size_diff:data[i].size_diff,
                    year_diff:data[i].year_diff,
                    comp_DOM: data[i].comp_DOM
                  })
                 }
                }
        })

   //update the sales estimation
   await db.sequelize.query(QUERY4,{raw:false,type:db.sequelize.QueryTypes.SELECT}).then( data=> {
    
              if(data){
                 for (i=0;i<data.length;i++){
                db.sale_ests.create({
                subject:data[i].subject,
                est_sale:data[i].est_sale,
              })
               }
              }
        })
   
   //finally customerOutputs
   await db.sequelize.query(QUERY5,{raw:false, type:db.sequelize.QueryTypes.SELECT}).then( data=> {
                if(data){
                    for (i=0;i<data.length;i++){
                        db.customerOutputs.create({
                            FMLS:data[i].FMLS,
                            Address: data[i].Address,
                            City:data[i].City,
                            Zip:data[i].Zip,
                            Sub:data[i].Sub,
                            Y:data[i].Y,
                            B:data[i].B,
                            B_F:data[i].B_F,
                            B_H:data[i].B_H,
                            SQFT:data[i].SQFT,
                            Price:data[i].Price,
                            Hoa:data[i].Hoa,
                            F:data[i].F,
                            DOM:data[i].DOM,
                            est_rent:data[i].est_rent,
                            est_sale:data[i].est_rent
                          })
                    }
                }
        })
   
   await db.customerFinds.findAll({}).then(function(data) {
            //1.Using a loop to apply the otl function and get offer2list value;
            //2 put the new entry to the table subject_otlist
            for(i=0;i<data.length;i++){

              var rent = data[i].est_rent
              var marketValue = data[i].est_sale
              var rehab = 9000
      
              //tax function can go here
              db.customerOtlists.create({
                subject:data[i].FMLS,
                otl:otl(data[i].Price,0.048,rent,marketValue,data[i].Y,rehab,data[i].Hoa,data[i].F,),
                Address:data[i].Address,
                City:data[i].City,
                Zip:data[i].Zip,
                Sub: data[i].Sub,
                Y:data[i].Y,
                B:data[i].B,
                B_F:data[i].B_F,
                B_H:data[i].B_H,
                SQFT:data[i].SQFT,
                Price: data[i].Price,
                est_rent:data[i].est_rent,
                est_sale:data[i].est_sale,
              })
            }
          })

    db.customerOtlists.findAll({
            order:[['otl','DESC']]
           }).then(function(data){
                 res.send(data)
                 })
   

    })
}