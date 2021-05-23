"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeRoomSchema = new Schema({
  name: String,
  description: { type: String, required: true }
});

module.exports = mongoose.model("TypeRoom", TypeRoomSchema);
