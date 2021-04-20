const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initilization
const app = express();

// Database

// mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/rest-api-example", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Database successful connected");
  })
  .catch((err) => console.log(err));

// Settings
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes

app.use("/api/users", require("./routes/users"));

// Starting Server
app.listen(app.get("port"), () => {
  console.log(`Server Starting in: http://localhost:${app.get("port")}`);
});
