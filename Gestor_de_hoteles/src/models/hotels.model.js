"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  description: { type: String, required: true },
  eventId: { type: Schema.ObjectId, ref: "Event" },
  roomId: { type: Schema.ObjectId, ref: "Room" },
});

module.exports = mongoose.module("Hotel", HotelSchema);
