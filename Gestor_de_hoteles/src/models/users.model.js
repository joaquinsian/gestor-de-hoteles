"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema({
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  rol: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Users", UsersSchema);
