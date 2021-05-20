'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = Schema({
    stock: Number,
    type_room_id: { type: Schema.ObjetId, ref:'typeroom'}
});
 
module.exports = mongoose.model('Room', RoomSchema);
