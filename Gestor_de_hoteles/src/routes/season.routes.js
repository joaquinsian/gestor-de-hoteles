"use strict";

const express = require("express");
const router = express.Router();

const season = require("../controllers/season.controller");

router.post("/seasonalCreation", season.createSeason);
router.get("/seasonsView", season.getSeason);
router.get("/seasonsView/:id", season.getSeasonId);

module.exports = router;
