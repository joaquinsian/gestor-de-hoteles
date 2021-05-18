"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// Settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cabecera
app.use(cors());

//importación de rutas
const reservacion_routes = require("./routes/reservacion.routes");
const usuarios_routes = require("./routes/usuarios.routes");

//carga de rutas
app.use("/api", reservacion_routes);
app.use("/api", usuarios_routes);

module.exports = app;
