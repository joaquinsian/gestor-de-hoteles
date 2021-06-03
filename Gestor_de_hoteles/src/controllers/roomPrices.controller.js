"use strict";

const RoomPrice = require("../models/roomPrices.model");


const RoomPriceCtrl = {};

// Create Room Price
RoomPriceCtrl.createRoomPrice = async (req, res) => {
  const { price } = req.body;

  try {
    const newRoomPrice = new RoomPrice({
      price,
    });

    const savedRoomPrice = await newRoomPrice.save();
    console.log(savedRoomPrice);

    res.status(201).json(savedRoomPrice);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Rooms Price
RoomPriceCtrl.getRoomsPrice = async (req, res) => {
  const roomsPrice = await RoomPrice.find();
  return res.json(roomsPrice);
};

// Get Room Price for Id
RoomPriceCtrl.getRoomPriceById = async (req, res) => {
  const { roomPriceId } = req.params;

  const roomPrice = await RoomPrice.findById(roomPriceId);
  res.status(200).json(roomPrice);
};

// Update Room Price for Id
RoomPriceCtrl.updateRoomPriceById = async (req, res) => {
  const updateRoomPrice = await RoomPrice.findByIdAndUpdate(
    req.params.roomPriceId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateRoomPrice);
};

// Delete Room Price for Id
RoomPriceCtrl.deleteRoomPriceById = async (req, res) => {
  const { roomPriceId } = req.params;

  await RoomPrice.findByIdAndDelete(roomPriceId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = RoomPriceCtrl;
