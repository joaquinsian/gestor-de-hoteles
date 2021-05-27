'use strict'

const Event = require("../models/events.mode");
const EventCtrl = {};

EventCtrl.createEvent = async (req, res) => {
  const { typeEventId } = req.body;
 
  try {
    const newEvent = new Event({
      
    });

    if(req.body.typeEventId) {
      const foundetipeEv = await typeEventId.find({ name:{ $in: typeEventId}});
      newEvent.typeEventId = foundetipeEv.map((typeEventid)=> typeEventid._id);
    }

    const EventSaved = await newEvent.save();
    res.status(201).json(EventSaved);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = EventCtrl
