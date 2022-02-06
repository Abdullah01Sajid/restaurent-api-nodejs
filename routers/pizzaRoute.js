const express = require("express");
const router = express.Router();
const pizzas = require("../storage/pizzas");
router.get("/", (req, res) => {
  res.json(pizzas);
});
module.exports = router;
