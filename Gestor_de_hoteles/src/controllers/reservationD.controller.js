'use strict'

const Reservation = require("../models/reservations.models");
const ReservationCtrl = {};

ReservationCtrl.createReservation = async (req, res) => {
  const { beginDate, finalDate, roomId, eventId, userId} = req.body;
  try {
    const newReservation = new Reservation({
        beginDate,
        finalDate    
    });

    if(req.body.roomId) {
      const foundroom = await roomId.find({ name:{ $in: roomId}});
      newReservation.roomId = foundroom.map((roomid)=> roomid._id);
    }

    if(req.body.eventId) {
        const foundevent = await eventid.find({ name:{ $in: eventId}});
        newReservation.eventId = foundevent.map((eventid)=> eventid._id);
    }

    if(req.body.userId) {
        const founduser = await  userid.find({ name:{ $in: userId}});
        newReservation.userId = founduser.map((userid)=> userid._id);
    }


    const ReservationSaved = await newReservation.save();
    res.status(201).json(ReservationSaved);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = ReservationCtrl;
