"use strict"

const typeRoom = require("../models/typeRooms.model");
const TpRoomCtrl = {};

TpRoomCtrl.createTypeRoom = async (req, res) => {
  const { name , description } = req.body;

  try {
    const newtypeRoom = new typeRoom({
      name,
      description 
   }); 

    const typeRoomSaved = await newtypeRoom.save();

    res.status(201).json(typeRoomSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = TpRoomCtrl;
