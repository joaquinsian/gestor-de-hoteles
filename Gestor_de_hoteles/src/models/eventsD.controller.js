'use strict'

import Event from "../models/events.mode";

export const createEvent = async (req, res) => {
  const { tipeEventId } = req.body;

  try {
    const newEvent = new Event({
      
    });

    if(req.body.typeEventId) {
      const foundetipeEv = await tipeEventId.find({ name:{ $in: typeEventId}});
      newEvent.typeEventId = foundetipeEv.map((typeEventid)=> typeEventid._id);
    }

    const EventSaved = await newEvent.save();
    res.status(201).json(EventSaved);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};







