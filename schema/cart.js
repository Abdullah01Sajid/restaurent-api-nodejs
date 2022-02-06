const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    ingredient: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("CartSchema", CartSchema);
