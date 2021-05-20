'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeEvent_Schema = Schema({
    description: String
});
 
module.exports = mongoose.module('typeEvent', typeEvent_Schema);
