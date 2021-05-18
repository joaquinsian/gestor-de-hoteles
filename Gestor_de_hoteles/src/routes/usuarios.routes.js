"use strict";

const express = require("express");
const usuariosController = require("../controllers/usuarios.controller");

var api = express.Router();

api.post("/registrarUsuarios", usuariosController.registrarUsuarios);

module.exports = api;
