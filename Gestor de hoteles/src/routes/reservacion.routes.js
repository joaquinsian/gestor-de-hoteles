'use strict'

const express = require('express');
const hotelController = require('../controllers/hotel.controller');

var api = express.Router();


//creación de reservación 
api.post('/crearReservacion', hotelController.crearReservaciones);

module.exports = api;