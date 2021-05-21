"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeRoomSchema = new Schema({
  description: { type: String, required: true },
});

module.exports = mongoose.model("TypeRoom", TypeRoomSchema);
