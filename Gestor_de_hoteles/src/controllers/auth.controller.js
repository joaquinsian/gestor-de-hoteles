"use strict";

const User = require("../models/users.model");

const pathCtrl = {};

pathCtrl.signUp = async (req, res) => {
  const { userName, email, password, roles } = req.body;

  const newUser = new User({
    userName,
    email,
    password: await User.encryptPassword(password),
  });

  console.log(newUser);

  res.json("signUp");
};

pathCtrl.signIn = async (req, res) => {
  res.json("signIn");
};

module.exports = pathCtrl;
