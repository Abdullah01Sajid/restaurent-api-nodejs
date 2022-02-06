const express = require("express");
const router = express.Router();
const bebidas = require("../storage/bebidas");
router.get("/", (req, res) => {
  res.json(bebidas);
});
module.exports = router;
