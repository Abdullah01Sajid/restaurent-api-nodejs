const router = require("express").Router();
const Data = require("../schema/userOrder.js");

router.get("/", async (req, res) => {
  const getData = await Data.find();
  res.json(getData);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const changeDelivery = await Data.findByIdAndUpdate(
      { _id: id },
      { $set: { delivered: "delivered" } },
      { new: true }
    );
    res.status(200).json(changeDelivery);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
