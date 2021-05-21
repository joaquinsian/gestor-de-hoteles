"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
  typeEventId: { type: Schema.ObjectId, ref: "typeEvent" },
});

module.exports = mongoose.model("Event", EventSchema);
