'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventPrice_Schema = Schema({
    eventPrice_id: Number,
    price: String,
    type_Event_id: { type: Schema.ObjectId, ref: 'typeEvent'}
});

module.exports = mongoose.model('eventPrice', eventPrice_Schema);
