'use strict'

const express = require('express');
const router = express.Router();

const typeRoomD = require('../controllers/typeRoomD.controller');
const typeEventD = require('../controllers/typeEventD.controller');
const ServiceD = require('../controllers/serviceD.controller');
const SeasonD = require('../controllers/seasonD.controller');
const EventPriceD = require('../controllers/eventPriceD.controller');


router.post('/typeRoom', typeRoomD.createTypeRoom);
router.post('/typeEvent', typeEventD.createtypeEvent);
router.post('/Service', ServiceD.createService);
router.post('/Season', SeasonD.createSeason); 
router.post('/eventPrice', EventPriceD.createeventPrice);

module.exports = router; 
