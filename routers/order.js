const express = require("express");
const router = express.Router();
const Persons = require("../schema/confirmed");

router.put("/accept/:id/:userId", async (req, res) => {
  const getRestaurent = await Persons.findById({ _id: req.params.id });
  try {
    const newArray = await getRestaurent.order.filter((products) => {
      products._id === req.params.userId;
    });
    console.log(newArray);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
