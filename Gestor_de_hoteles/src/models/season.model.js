'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeasonSchema = Schema({
    season_id: Number,
    begin_date: String,
    end_date: String
});

module.exports = mongoose.model('Season', SeasonSchema);
