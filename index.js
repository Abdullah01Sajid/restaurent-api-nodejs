const express = require("express");
const app = express();
const mongoose = require("mongoose");
const rout = require("./routers/routes");
const cors = require("cors");
//Confirmed products
require("dotenv").config();
const accept = require("./routers/order");
const confirmedProducts = require("./routers/confirmProducts");
const pizzaRoute = require("./routers/pizzaRoute");
const pastaRoute = require("./routers/pastaRoutes");
const postreRoute = require("./routers/postreRoute");
const bebidaRoute = require("./routers/bebidaRoute");
const AllProducts = require("./routers/allProducts");
const ResStatus = require("./routers/RestaurentStatus");
const stripe = require("./routers/stripe");
const getOrderData = require("./routers/getOrderData");
const search = require("./routers/seacrch");
const login = require("./routers/login");
const Delivered = require("./routers/changeDeliveryStatus");
//midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", rout);
app.use("/pizzas", pizzaRoute);
app.use("/pastas", pastaRoute);
app.use("/postres", postreRoute);
app.use("/bebidas", bebidaRoute);
app.use("/all", AllProducts);
//app.use("/user", login);
app.use("/confirmed/products", confirmedProducts);
app.use("/restaurent", ResStatus);
app.use("/get", accept);
app.use("/search", search);
app.use("/payment", stripe);
app.use("/data", getOrderData);
app.use("/delivered", Delivered);
///
app.use(express.static("build"));
mongoose.connect(
  "mongodb+srv://abdullahsajid:sajid@cluster0.ybgc0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlparser: true },
  () => {
    console.log("mongoDB is connected");
  }
);

app.get("/", (req, res) => {
  res.send("wellcome to home page");
});
app.all("*", async (req, res) => {
  res.status(404).json({ message: "error page not found " });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listning on port ${port}`);
});
