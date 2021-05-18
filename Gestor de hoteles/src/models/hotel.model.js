'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var HotelSchema = Schema({
    nombre: String,
    dirección: String,
    evento: String,
    tipo_de_evento: String,
    numero_de_telefono: Number

})
module.exports = mongoose.model('hotel', HotelSchema)
