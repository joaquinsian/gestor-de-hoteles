"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;


const RoleSchema = new Schema({  
  name: { type: String, required: true },
  versionKey: false
});

module.exports = mongoose.model("Role", RoleSchema);