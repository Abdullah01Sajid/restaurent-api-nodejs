const express = require("express");
const router = express.Router();
const Person = require("../schema/scheema");
const cart = require("../schema/cart");
//getting all the Users
router.get("/", async (req, res) => {
  const people = await Person.find();
  res.status(201).json(people);
});

//creating a new person
router.post("/", async (req, res) => {
  const lat = req.body.lat;
  const long = req.body.long;
  const exactDirection = { lat, long };
  const existingPerson = await Person.findOne({
    name: req.body.name,
    direction: req.body.direction,
  });
  if (existingPerson) {
    res.status(200).json(existingPerson);
  } else {
    const NewPerson = await new Person({
      name: req.body.name,
      direction: req.body.direction,
      mapDirection: exactDirection,
    });
    try {
      const saved = await NewPerson.save();
      res.json(saved);
    } catch (error) {
      res.json({ message: error });
    }
  }
});
// finding one person
router.get("/:id", async (req, res) => {
  try {
    const personId = await Person.findById({ _id: req.params.id });
    if (personId == null) {
      res.status(404).json({ message: "User does not exist" });
    } else {
      res.json(personId);
    }
  } catch (error) {
    res.status(404).json({ message: "User does not exist" });
  }
});
// adiing a cart of a Person
router.put("/cart/:id", async (req, res) => {
  try {
    const newcart = await new cart({
      name: req.body.name,
      id: req.body.id,
      ingredient: req.body.ingredient,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    const User = await Person.findById({ _id: req.params.id });
    if (User.cart === null) {
      const updatedCart = await Person.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: { cart: [newcart] },
        },
        { new: true }
      );
      let newCarts = updatedCart.cart;
      let priceCollection = [];
      let total = 0.0;
      newCarts.forEach((element) => {
        priceCollection.push(element.price);
      });
      priceCollection.forEach((element2) => {
        total = total + element2;
      });
      const newupdatedCart = await Person.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: { totalprice: total, pricelist: priceCollection },
        },
        { new: true }
      );

      res.json(newupdatedCart);
    } else {
      const newupdatedCart = await Person.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: { cart: [...User.cart, newcart] },
        },
        { new: true }
      );
      let newCarts = newupdatedCart.cart;
      let priceCollection = [];
      let total = 0.0;
      newCarts.forEach((element) => {
        priceCollection.push(element.price);
      });
      priceCollection.forEach((element2) => {
        total = total + element2;
      });
      const newestupdatedCart2 = await Person.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            totalitems: newupdatedCart.cart.length,
            totalprice: total,
            pricelist: priceCollection,
          },
        },
        { new: true }
      );

      res.json(newestupdatedCart2);
    }
  } catch (error) {
    res.json({ message: error });
  }
});

// deleting the User from data base
router.delete("/:id", async (req, res) => {
  try {
    const toDelete = await Person.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "the User has been deletd" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "can not delete the User (user might not exist)" });
  }
});

// finding cart

router.get("/cart/:id", async (req, res) => {
  try {
    const CartOwner = await Person.findById({ _id: req.params.id });
    if (CartOwner.cart !== null) {
      return res.json(CartOwner);
    }
  } catch (error) {
    res.json({ message: "can not find the cart" });
  }
});

// deleting the cart inside of a certain User database
router.delete("/cart/:id", async (req, res) => {
  try {
    const DeletedCart = await Person.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          cart: [],
          totalitems: 0,
          totalprice: 0,
          pricelist: [],
        },
      },
      { new: true }
    );
    res.status(201).json(DeletedCart);
  } catch (error) {
    res.json({ message: "can not delete the cart something may be wrong" });
  }
});

router.all("*", async (req, res) => {
  res.status(404).json({ message: "following page/User does not exist" });
});

module.exports = router;
