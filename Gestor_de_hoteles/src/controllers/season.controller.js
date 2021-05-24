"use strict";

const Season = require("../models/season.model");

const SeasonCtrl = {};

SeasonCtrl.createSeason = async (req, res) => {
  const { name, beginDate, finalDate } = req.body;

  try {
    const newSeason = new Season({
      name,
      beginDate,
      finalDate,
    });

    const savedSeason = await newSeason.save();
    console.log(savedSeason);

    res.status(201).json(savedSeason);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

SeasonCtrl.getSeason = async (req, res) => {
  const seasons = await Season.find();
  //console.log(seasons);
  return res.json(seasons);
};

SeasonCtrl.getSeasonId = async (req, res) => {
  const { seasonId } = req.params;

  const season = await Season.findById(seasonId);
  res.status(200).json(season);
};
/*
SeasonCtrl.updateSeason = async(req, res) => {
  const updatedSeadon = await Season.findByIdAndUpdate(
    req.params._id,
    req.body,
    {
      new: true,
    }
  )
}
*/
module.exports = SeasonCtrl;
