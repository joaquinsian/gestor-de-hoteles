'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = Schema ({
    type_event_id: { type: Schema.ObjectId, ref: 'typeEvent'} 
});

module.exports =  mongoose.model('Event', EventSchema);
