const express = require("express");
const router = express.Router();
const User = require("../schema/scheema");
router.get("/", async (req, res) => {
  try {
    if (!user) {
      return res.status(404).json("no user found");
    }
    const user = await User.findOne({
      name: req.body.name,
      direction: req.body.direction,
    });
    res.status(200).json(user);
  } catch (error) {
    res.json({ message: "no user found" });
  }
});
module.exports = router;
