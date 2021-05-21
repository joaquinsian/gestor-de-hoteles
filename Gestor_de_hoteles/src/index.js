const express = require("express");
const morgan = require("morgan");
const app = express();

const { mongoose } = require('./database');

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use ('/api/users/', require('./routes/prueba.routes'));

// Starting the Server
app.listen(app.set("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
