"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomSchema = new Schema({
  stock: { type: Number, required: true, trim: true },
  typeRoomId: { type: Schema.ObjectId, ref: "TypeRoom" }
});

module.exports = mongoose.model("Room", RoomSchema);
 