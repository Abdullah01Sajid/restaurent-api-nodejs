const express = require("express");
const router = express.Router();
const Order = require("../schema/userOrder");
const Person = require("../schema/scheema");
router.get("/", async (req, res) => {
  try {
    const getAllData = await Order.find();
    res.status(200).json(getAllData);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const User = await Person.findById({ _id: userId });
    const newData = await new Order({
      restaurent: req.body.resName,
      user: { ...User },
    });
    const Saved = await newData.save();
    res.status(201).json(Saved);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:orderID", async (req, res) => {
  const { orderID } = req.params;
  try {
    const getData = await Order.findById({ _id: orderID });
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
