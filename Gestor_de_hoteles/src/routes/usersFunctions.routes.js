'use strict'

const express = require('express');
const router = express.Router();

const getHotel = require('../controllers/generalFunction.controller');

router.get('/hotel', getHotel.getHotel);


module.exports = router; 
