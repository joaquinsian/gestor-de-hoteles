'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomPrice_Schema = Schema({
    price: String,
    typeRoom_id: {type: Schema.ObjetId, ref:'typeRoom'},
    season_id: { type: Schema.ObjetId, ref: 'Season'}
});
 
module.exports = mongoose.model('roomPrice', roomPrice_Schema);
