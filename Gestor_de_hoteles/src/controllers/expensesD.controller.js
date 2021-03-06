'use strict'

const Expense = require("../models/expenses.model");
const ExpensesCtrl = {};

ExpensesCtrl.createExpense = async (req, res) => {
  const { amount, price, reservationId, serviceId } = req.body;
 
  try {
    const newExpense = new Expense({
        amount,
        price,
    });

    if(req.body.reservationId) {
      const foundreservation = await reservationId.find({ name:{ $in: reservationId}});
      newExpense.reservationId = foundreservation.map((reservationid)=> reservationid._id);
    }

    if(req.body.serviceId) {
        const foundservice = await serviceid.find({ name:{ $in: serviceId}});
        newExpense.serviceId = foundservice.map((serviceid)=> serviceid._id);
    }

    const ExpenseSaved = await newExpense.save();
    res.status(201).json(ExpenseSaved);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = ExpensesCtrl;
