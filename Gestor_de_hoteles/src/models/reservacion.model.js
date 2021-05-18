"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReservacionesSchema = new Schema({
  _id: String,
  nombre: String,
  apellido: String,
  correo_electronico: String,
  habitacion: String,
  fecha_inicio_de_reservacion: String,
  fecha_final_de_reseervacion: String,
  noches_reservadas: Number,
});

module.exports = mongoose.model("reservaciones", ReservacionesSchema);

/*    fecha_inicio_de_reservacion: {type: String, unique: true},
    fecha_final_de_reseervacion: {type: String, unique: true},
    noches_reservadas: Number*/
