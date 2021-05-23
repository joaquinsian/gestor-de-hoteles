"use strict";

const User = require("../models/users.model");

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersCtrl.createUsers = function () {};

usersCtrl.getUser = function () {};

usersCtrl.editUser = function () {};

usersCtrl.deleteUser = function () {};

module.exports = usersCtrl;
