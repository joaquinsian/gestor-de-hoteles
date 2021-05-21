"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

export const ROLES = ["user", "admin", "adminHotel"];

const RoleSchema = new Schema({
  name: { type: String, required: true },
  versionKey: false,
});

module.exports = mongoose.model("Role", RoleSchema);
