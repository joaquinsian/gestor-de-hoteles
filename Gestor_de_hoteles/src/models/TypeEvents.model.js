'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeEvent_Schema = Schema({
    typeEvent_id: Number,
    description: String
});
 
module.exports = mongoose.module('typeEvent', typeEvent_Schema);
