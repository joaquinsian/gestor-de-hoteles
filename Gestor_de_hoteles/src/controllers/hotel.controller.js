"use strict";

const Reservacion = require("../models/reservacion.model");

function crearReservaciones(req, res) {
  var reservacion = new Reservacion();
  var params = req.body;

  if (params.nombre && params.apellido) {
    reservacion._id = params._id;
    reservacion.nombre = params.nombre;
    reservacion.apellido = params.apellido;
    reservacion.correo_electronico = params.correo_electronico;
    reservacion.habitacion = params.habitacion;
    reservacion.fecha_inicio_de_reservacion =
      params.fecha_inicio_de_reservacion;
    reservacion.fecha_final_de_reservacion = params.fecha_final_de_reservacion;
    reservacion.noches_reservadas = params.noches_reservadas;

    Reservacion.find({ _id: reservacion._id }).exec((err, resencontrada) => {
      if (err)
        return res
          .status(500)
          .send({ mensaje: " Error al realizar la reservacion" });

      if (resencontrada.lenght > 0) {
        return res
          .status(500)
          .send({ mensaje: "habitacion reservada actualmente" });
      } else {
        reservacion.save((err, reservacionSave) => {
          if (err) {
            res
              .status(500)
              .send({
                mensaje: "la habitacion se encuentra reservada actualmente",
              });
          } else {
            res.status(200).send({ reservacionSave });
          }
        });
      }
    });
  }
}

module.exports = {
  crearReservaciones,
};
