const router = require("express").Router();
const stripe = require("stripe").Stripe(
  "sk_test_51KMcMKAqMZJTXNGBiFvcSi84UVF4Dnk0ND2X7uU4Wh0IfwQxRjvqxY8Qfb9svkXUc9Y0gM4xJxEadCgt2Sfb82n800PvTJMX2k"
);

router.post("/checkout", (req, res) => {
  const response = stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "eur",
    },
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});
module.exports = router;
