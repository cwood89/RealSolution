require("dotenv").config();
var express = require("express");
const path = require("path");
var app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var db = require("./models");
var PORT = process.env.PORT || 3002;

// Middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
};


// importing sessions
require("./sessions")(app)

// Routes
require("./routes/favoriteRoutes")(app);
require("./routes/authRoutes")(app);
require("./routes/otlSetup")(app);
require("./routes/subject-summary-api-routes")(app);
require("./routes/compApi")(app);
require("./routes/customerOutputs-api-routes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Sending React to Client=====================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

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
