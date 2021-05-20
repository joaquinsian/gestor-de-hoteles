'use strict'

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
    begin_date: String,
    end_date: String,
    room_id: { type: Schema.ObjectId, ref: 'Room'},
    event_id: { type: Schema.ObjectId, ref:'Event'},
    user_id: { type: Schema.ObjetctId, ref: 'User'}
});
 
module.exports = mongoose.model('Reservation', ReservationSchema);
