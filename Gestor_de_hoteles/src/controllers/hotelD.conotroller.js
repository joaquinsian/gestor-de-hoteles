'use strict'

import Hotel from "../models/hotels.model";

export const createHotel = async (req, res) => {
  const { name, description, eventId, roomId } = req.body;

  try {
    const newHotel = new Hotel({
        name,
        description,
    });

    if(req.body.eventId) {
      const foundevent = await eventid.find({ name:{ $in: eventId}});
      newHotel.eventId = foundevent.map((eventid)=> eventid._id);
    }

    if(req.body.roomId) {
        const foundroom = await roomid.find({ name:{ $in: roomId}});
        newHotel.roomId = foundroom.map((roomid)=> roomid._id);
    }

    const HotelSaved = await newHotel.save();
    res.status(201).json(HotelSaved);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};