const express = require("express");
const router = express.Router();
const Order = require("../schema/userOrder");
const Person = require("../schema/scheema");
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
module.exports = router;
