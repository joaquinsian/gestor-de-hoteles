'use strict'

import Rol from "../models/roles.model";

export const createRol = async (req, res) => {
  const { name, versionKey } = req.body;

  try {
    const newRol = new Rol({
      name,
      versionKey
    });

    const RolSaved = await newRol.save();

    res.status(201).json(RolSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};