const express = require("express");
const router = express.Router();
const Confirmed = require("../schema/confirmed");

router.put("/status/:resId", async (req, res) => {
  try {
    const Find = await Confirmed.findById({ _id: req.params.resId });
    let status = Find.status;
    const FindRestaurent = await Confirmed.findByIdAndUpdate(
      { _id: req.params.resId },
      {
        $set: {
          status: !status,
        },
      },
      { new: true }
    );
    res.status(200).json(FindRestaurent.status);
  } catch (error) {
    res.status(404).json({
      message: "can not get status",
    });
  }
});
router.get("/status/:resId", async (req, res) => {
  try {
    const FindData = await Confirmed.findById({ _id: req.params.resId });
    res.status(200).json(FindData);
  } catch (error) {
    res.status(400).json({ message: "can not get status " });
  }
});

module.exports = router;
