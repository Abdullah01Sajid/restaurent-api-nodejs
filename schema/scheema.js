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
    mapDirection: {
      type: Object,
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
Persons.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 });
module.exports = mongoose.model("Persons", Persons);
