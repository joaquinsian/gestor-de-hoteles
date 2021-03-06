'use strict'

const Room = require("../models/rooms.model");
const RoomCtrl = {};

RoomCtrl.createRoom = async (req, res) => {
  const { stock, typeRoomId } = req.body;

  try {
    const newRoom = new Room({
      stock
    });

    if(req.body.typeRoomId) {
      const foundroom = await typeroomtId.find({ name:{ $in: typeRoomId}});
      newRoom.typeRoomId = foundroom.map((typeroomid)=> typeroomid._id);
    }

    const RoomSaved = await newRoom.save();

    res.status(201).json(RoomSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = RoomCtrl;
