require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/otlSetup")(app)
require("./routes/subject-summary-api-routes")(app);
require("./routes/newListingTable-api-routes")(app);
require("./routes/subjectWithComps-api-routes")(app);
require("./routes/rentalCompsTable-api-routes")(app);
require("./routes/saleCompsTable-api-routes")(app);
require("./routes/rentEstTable-api-routes")(app);
require("./routes/saleEstTable-api-routes")(app);
require("./routes/htmlRoutes")(app);

//this one is really the one you going to need
require("./routes/customerOutputs-api-routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
