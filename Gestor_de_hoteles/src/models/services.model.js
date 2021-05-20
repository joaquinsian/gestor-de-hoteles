'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = Schema({
    service_id: Number,
    description: Number,
    price: String
});

module.exports = mongoose.module('Service', ServiceSchema);
