'use strict'

import Season from "../models/season.model";

export const createSeason = async (req, res) => {
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