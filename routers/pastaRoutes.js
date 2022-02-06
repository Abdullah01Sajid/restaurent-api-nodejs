const express = require("express");
const router = express.Router();
const pastas = require("../storage/pastas");
router.get("/", (req, res) => {
  res.json(pastas);
});
module.exports = router;
