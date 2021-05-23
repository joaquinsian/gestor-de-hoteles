'use strict'

const Service = require("../models/services.model");
const ServiceCtrl = {};
 

ServiceCtrl.createService = async (req, res) => {
  const { description, price } = req.body;

  try {
    const newService = new Service({
      description,
      price
    });

    const ServiceSaved = await newService.save();

    res.status(201).json(ServiceSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = ServiceCtrl
