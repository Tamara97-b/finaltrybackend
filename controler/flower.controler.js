"use strict";
const axios = require("axios");
const flowerModel = require("../model/flower.model");


const getDataAbi = async (req, res) => {
  try {
    const flowerDataAbi = await axios.get(
      "https://flowers-api-13.herokuapp.com/getFlowers"
    );
    res.send(flowerDataAbi.data);
  } catch (error) {
    res.send(error);
  }
};

const getOwnFlower = (req, res) => {
  flowerModel.find({ email: req.query.email }, (error, flowerData) => {
    res.json(flowerData);
  });
};

const createFlower = (req, res) => {
  const { instructions, photo, name, email } = req.body;
  const newflower = new flowerModel({ instructions, photo, name, email });
  newflower.save();
  res.json(newflower);
};

const deleteFlower = (req, res) => {
  const flowerid = req.params._id;

  flowerModel.deleteOne({ _id: flowerid }, (error, deletedData) => {
    res.json(deletedData);
  });
};

const updateFlower = (req, res) => {
  const { instructions, photo, name, email } = req.body;
  const flowerid = req.params._id;

  flowerModel.findByIdAndUpdate(
    { _id: flowerid },
    { instructions, photo, name, email },
    { new: true },
    (error, updateddata) => {
      res.json(updateddata);
    }
  );
};

module.exports = {
  getDataAbi,
  getOwnFlower,
  createFlower,
  deleteFlower,
  updateFlower,
};
