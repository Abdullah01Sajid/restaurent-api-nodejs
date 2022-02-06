const mongoose = require("mongoose");

const Persons = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    direction: {
      type: String,
      required: true,
      unique: true,
    },
    cart: Array,
    totalitems: { type: Number, default: 0 },
    totalprice: { type: Number, default: 0 },
    pricelist: Array,
    accepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Persons", Persons);
