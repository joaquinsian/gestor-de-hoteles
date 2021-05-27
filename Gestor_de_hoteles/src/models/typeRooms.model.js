"use strict";
 
const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeRoomSchema = new Schema({
  name: { type: String, required: false},
  description: { type: String, required: false},
});

module.exports = mongoose.model("TypeRoom", TypeRoomSchema); 
