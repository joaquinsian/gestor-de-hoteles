"use strict";

const TypeEvent = require("../models/typeEvents.model");

const TypeEventCtrl = {};

// Create Type Event
TypeEventCtrl.createTypeEvent = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newTypeEvent = new TypeEvent({
      name,
      description,
    });

    const savedTypeEvent = await newTypeEvent.save();
    console.log(savedTypeEvent);

    res.status(201).json(savedTypeEvent);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Type Event
TypeEventCtrl.getTypeEvents = async (req, res) => {
  const typeEvent = await TypeEvent.find();
  return res.json(typeEvent);
};

// Get Type Event for Id
TypeEventCtrl.getTypeEventById = async (req, res) => {
  const { typeEventId } = req.params;

  const typeEvent = await TypeEvent.findById(typeEventId);
  res.status(200).json(typeEvent);
};

// Update Tyoe Event for Id
TypeEventCtrl.updateTypeEventById = async (req, res) => {
  const updateTypeEvent = await TypeEvent.findByIdAndUpdate(
    req.params.typeEventId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateTypeEvent);
};

// Delete Type Event for Id
TypeEventCtrl.deleteTypeEventById = async (req, res) => {
  const { typeEventId } = req.params;

  await TypeEvent.findByIdAndDelete(typeEventId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = TypeEventCtrl;
