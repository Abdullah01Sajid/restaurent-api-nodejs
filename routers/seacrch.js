const express = require("express");
const router = express.Router();
const bebidas = require("../storage/bebidas");
const pastas = require("../storage/pastas");
const pizzas = require("../storage/pizzas");
const postres = require("../storage/postres");

router.post("/", async (req, res) => {
  const AllProducts = [...bebidas, ...pastas, ...postres, ...pizzas];

  try {
    if (req.body.name) {
      let name = req.body.name;

      const getProducts = AllProducts.filter((pro) => {
        return pro.name.startsWith(name);
      });
      res.status(200).json(getProducts);
    } else {
      return res.status(400).json({ message: "nothing is being searched " });
    }
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
