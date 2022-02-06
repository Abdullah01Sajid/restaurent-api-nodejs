const express = require("express");
const router = express.Router();
const Persons = require("../schema/scheema");
const ConfirmedOrders = require("../schema/confirmed");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
  const getProducts = await ConfirmedOrders.find();
  res.json(getProducts);
});
router.post("/login", async (req, res) => {
  if (!(req.body.name && req.body.password)) {
    res.status(400).json({ message: "missing values" });
  }
  const FindRes = await ConfirmedOrders.findOne({ resName: req.body.name });
  //comapring and loging the restaurent

  if (FindRes) {
    const hashed = FindRes.resPassword;
    const comparePass = await bcrypt.compare(req.body.password, hashed);
    if (comparePass) {
      res.status(201).json(FindRes);
    } else {
      res.status(400).json({ message: "the password is incorrect" });
    }
  } else {
    res.status(400).json("User does not exist please register");
  }
});
router.post("/register", async (req, res) => {
  if (!(req.body.name && req.body.password)) {
    return res.status(400).json({ message: "missing values" });
  }
  const findRes = await ConfirmedOrders.findOne({
    resName: req.body.name,
  });

  if (findRes) {
    const hashed = findRes.resPassword;
    const comparePass = await bcrypt.compare(req.body.password, hashed);
    if (comparePass) {
      return res.status(200).json({
        message: "User already exist",
      });
    } else {
      res.status(400).json({
        message: "password is not correct",
      });
    }
  } else {
    const encrypted = await bcrypt.hash(req.body.password, 10);
    const NewRes = await new ConfirmedOrders(
      {
        resName: req.body.name,
        resPassword: encrypted,
      },
      { new: true }
    );
    const saved = NewRes.save();
    console.log(saved);
    res.status(200).json(saved);
  }
});

router.get("/:resid", async (req, res) => {
  try {
    const getAll = await ConfirmedOrders.findById({ _id: req.params.resid });
    res.json(getAll);
  } catch (error) {
    res.json({ message: error });
  }
});
router.delete("/products/:resid", async (req, res) => {
  await ConfirmedOrders.deleteOne({ _id: req.params.resid });
  res.json({ message: "user is deleted " });
});

// putting the products inside the restaurent data

router.put("/:resId/user/:userid", async (req, res) => {
  const FindRes = await ConfirmedOrders.findById(req.params.resId);
  const getUser = await Persons.findById({ _id: req.params.userid });
  if (FindRes.status === false) {
    return res.json({ message: "the restaurent is Offline" });
  }
  if (FindRes.order === []) {
    if (getUser.totalitems === 0) res.json("empty cart");
    else {
      getUser.accepted = true;
      await Persons.findByIdAndUpdate(
        { _id: req.params.userid },
        { $set: { accepted: true } }
      );
      const updateRes = await ConfirmedOrders.findByIdAndUpdate(
        { _id: req.params.resId },
        { $set: { order: [getUser] } },
        { new: true }
      );
      res.json(updateRes);
    }
  } else {
    if (getUser.totalitems === 0) res.json("empty cart");
    else {
      getUser.accepted = true;
      await Persons.findByIdAndUpdate(
        { _id: req.params.userid },
        { $set: { accepted: true } }
      );

      const updatedRes = await ConfirmedOrders.findByIdAndUpdate(
        { _id: req.params.resId },
        { $set: { order: [...FindRes.order, getUser] } },
        { new: true }
      );
      res.json(updatedRes);
    }
  }
});
router.delete("/:resId", async (req, res) => {
  const deleteResPros = await ConfirmedOrders.findByIdAndUpdate(
    { _id: req.params.resId },
    { $set: { order: [] } },
    { new: true }
  );
  res.json(deleteResPros);
});

module.exports = router;
