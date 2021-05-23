"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const SeasonSchema = new Schema({
  beginDate: { type: Date, default: Date.now, required: true },
  finalDate: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Season", SeasonSchema);
