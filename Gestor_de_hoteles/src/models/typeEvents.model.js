"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeEventSchema = new Schema({
  description: { type: String, required: true },
});

module.exports = mongoose.model("TypeEvent", TypeEventSchema);
