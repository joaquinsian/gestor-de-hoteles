"use strict";

const express = require("express");
const router = express.Router();

const user = require("../controllers/prueba");

router.get("/", user.getUsers);
router.post("/", user.createUsers);
router.get("/:id", user.getUser);
router.put("/:id", user.editUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
