"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomPriceSchema = new Schema({
  price: { type: String, required: true, trim: true },
  typeRoomId: { type: Schema.ObjetId, ref: "TypeRoom" },
  seasonId: { type: Schema.ObjetId, ref: "Season" },
});

module.exports = mongoose.model("RoomPrice", RoomPriceSchema);
