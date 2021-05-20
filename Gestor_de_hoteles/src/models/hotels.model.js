'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = Schema({
    hotel_id: Number,
    description: String,
    event_id: { type: Schema.ObjectId, ref: 'Event'},
    room_id: { type: Schema.ObjectId, ref: 'Room'}
});

module.exports = mongoose.module('hotel', hotelSchema);
 