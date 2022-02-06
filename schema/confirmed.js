const mongoose = require("mongoose");

const ConfirmedOrders = new mongoose.Schema(
  {
    resName: {
      type: String,
      required: true,
    },
    resPassword: {
      type: String,
      required: true,
    },
    order: {
      type: Array,
      default: [],
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ConfirmedOrders", ConfirmedOrders);
