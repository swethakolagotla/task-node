const express = require("express");
const router = express.Router();
let number=100;
router.get("/", (req, res) => {
  res.status(200).json( number );
});
router.put("/", (req, res) => {
    number+=Number(req.body.value);
  res.status(200).json(Number(number ));
});
router.delete("/", (req, res) => {
   // number-=req.body.value
  res.status(200).json(Number(number) );
});
module.exports = router;
