'use strict'

const eventPrice = require("../models/eventPrice.model"); 
const EPriceCtrl = {};

EPriceCtrl.createeventPrice = async (req, res) => {
  const { price, typeEventId } = req.body;

  try {
    const neweventPrice = new eventPrice({
      price
    });

    if(req.body.typeEventId) {
      const foundetipeEv = await typeEventId.find({ name:{ $in: typeEventId}});
      neweventPrice.typeEventId = foundetipeEv.map((typeEventid)=> typeEventid._id);
    }

    const eventpriceSaved = await neweventprice.save();

    res.status(201).json(eventpriceSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = EPriceCtrl;
