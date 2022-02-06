const express = require("express");
const router = express.Router();
const postres = require("../storage/postres");
router.get("/", (req, res) => {
  res.json(postres);
});
module.exports = router;
