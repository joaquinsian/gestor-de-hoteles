const express = require("express");
const morgan = require("morgan");

const { mongoose } = require("./database");
const { createRoles } = require("./libs/initialSetup");

const app = express();
createRoles();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth/", require("./routes/auth.routes"));
app.use("/api/season/", require("./routes/season.routes"));
//app.use ('/api/users', require('./controllers/auth.controller'));

// Starting the Server
app.listen(app.set("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
