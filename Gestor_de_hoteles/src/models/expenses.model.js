'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpensesSchemna = Schema({
    amount: Number,
    price: String,
    Reservation_id: { type: Schema.ObjectId, ref: 'Reservation'},
    Service_id: { type: Schema.ObjectId, ref: 'Service'}
});

module.exports = mongoose.model('Expenses', ExpensesSchemna);
