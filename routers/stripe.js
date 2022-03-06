const router = require("express").Router();
const stripe = require("stripe").Stripe(
  procee.env.stripeKey
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
