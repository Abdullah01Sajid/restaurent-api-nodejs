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
CartSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 });
module.exports = mongoose.model("CartSchema", CartSchema);
