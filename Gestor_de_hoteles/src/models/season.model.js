'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeasonSchema = Schema({
    begin_date: String,
    end_date: String
});

module.exports = mongoose.model('Season', SeasonSchema);
