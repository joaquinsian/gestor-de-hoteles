'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
    _idUsuarios : String,
    nombre: String,
    apellido: String,
    rol: String,
    correo_electronico: String,

})


module.exports = mongoose.model('usuarios', UsuariosSchema)