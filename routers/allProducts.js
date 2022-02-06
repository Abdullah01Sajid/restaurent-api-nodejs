const express = require("express");
const router = express.Router();
const bebidas = require("../storage/bebidas");
const pastas = require("../storage/pastas");
const pizzas = require("../storage/pizzas");
const postres = require("../storage/postres");

router.get("/", async (req, res) => {
  try {
    const AllProducts = [...bebidas, ...pastas, ...postres, ...pizzas];
    res.json(AllProducts);
  } catch (error) {
    res.status(400).json({ message: "can not find the products " });
  }
});
module.exports = router;
