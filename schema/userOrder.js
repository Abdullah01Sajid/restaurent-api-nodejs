const mongoose = require("mongoose");

const orderData = new mongoose.Schema(
  {
    restaurent: {
      type: String,
      required: true,
    },

    user: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orderData", orderData);
