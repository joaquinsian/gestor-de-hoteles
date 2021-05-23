'use strict'
const Season = require("../models/season.model");
const SeasonCtrl = {};

SeasonCtrl.createSeason = async (req, res) => {
  const { beginDate, finalDate } = req.body;

  try {
    const newSeason = new Season({
        beginDate,
        finalDate
    });

    const SeasonSaved = await newSeason.save();

    res.status(201).json(SeasonSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = SeasonCtrl
