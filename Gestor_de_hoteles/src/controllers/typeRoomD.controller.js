'use strict'

import typeRoom from "../models/typeRooms.model";

export const createtypeRoom = async (req, res) => {
  const { description } = req.body;

  try {
    const newtypeRoom = new typeRoom({
      description
    });

    const typeRoomSaved = await newtypeRoom.save();

    res.status(201).json(typeRoomSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};