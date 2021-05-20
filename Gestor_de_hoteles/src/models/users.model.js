'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: String,
    last_name: String,
    email: String,
    password: String,
    rol: String
});

module.exports = mongoose.model('Users', UsersSchema);
