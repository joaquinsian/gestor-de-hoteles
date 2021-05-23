'use strict'

import typeEvent from "../models/typeEvents.model";

export const createtypeEvent = async (req, res) => {
  const { description } = req.body;

  try {
    const newtypeEvent = new typeEvent({
      description
    });

    const typeEventSaved = await newtypeEvent.save();

    res.status(201).json(typeEventSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};