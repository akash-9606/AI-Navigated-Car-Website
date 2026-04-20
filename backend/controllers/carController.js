import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};
