require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser")
const db = require("./models");

const PORT = process.env.PORT || 3001;

// Middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
};


// Routes
require("./routes/authRoutes")(app);
require("./routes/otlSetup")(app)
require("./routes/subject-summary-api-routes")(app);
require("./routes/compApi")(app);

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
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

