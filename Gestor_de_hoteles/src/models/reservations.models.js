"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationSchema = new Schema({
  beginDate: { type: Date, default: Date.now, required: true },
  finalDate: { type: Date, default: Date.now, required: true },
  roomId: { type: Schema.ObjectId, ref: "Room" },
  eventId: { type: Schema.ObjectId, ref: "Event" },
  userId: { type: Schema.ObjetctId, ref: "User" },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
