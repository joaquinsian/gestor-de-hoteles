'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var typeRoom_Schema = Schema ({
    typeRoom_id: Number,
    description: String
});

module.exports = mongoose.model('typeRoom', typeRoom_Schema);
