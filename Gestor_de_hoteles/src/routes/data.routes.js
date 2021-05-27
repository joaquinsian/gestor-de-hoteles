'use strict'

const express = require('express');
const router = express.Router();

const typeRoomD = require('../controllers/typeRoomD.controller');
const typeEventD = require('../controllers/typeEventD.controller');
const ServiceD = require('../controllers/serviceD.controller');
const SeasonD = require('../controllers/seasonD.controller');
const EventPriceD = require('../controllers/eventPriceD.controller');
const EventsD = require('../controllers/eventsD.controller');
const ExpensesD = require('../controllers/expensesD.controller');
const HotelD = require('../controllers/hotelD.conotroller');
const ReservationD = require('../controllers/reservationD.controller');
const RoomPriceD = require('../controllers/roomPriceD.controller');
const RoomD = require('../controllers/roomD.controller');

                       
router.post('/typeRoom', typeRoomD.createTypeRoom);
router.post('/typeEvent', typeEventD.createtypeEvent);
router.post('/Service', ServiceD.createService);
router.post('/Season', SeasonD.createSeason); 
router.post('/eventPrice', EventPriceD.createeventPrice);
router.post('/Events', EventsD.createEvent);
router.post('/Expenses', ExpensesD.createExpense);
router.post('/Hotel', HotelD.createHotel);
router.post('/Reservation', ReservationD.createReservation);
router.post('/RoomPrice', RoomPriceD.createroomPrice);
router.post('/Room', RoomD.createRoom);

module.exports = router; 