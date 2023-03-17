const express = require("express");
const router = express.Router();
let array = [
  {
    number: "1",
    id: "1",
  },
  {
    number: "2",
    id: "2",
  },
  {
    number: "3",
    id: "3",
  },
];

router.get("/", (req, res) => {
  res.send(array);
});
router.post("/", (req, res) => {
  const todo = {
    number: req.body.value,
    id: array.length + 1,
  };
  array.push(todo);
  res.status(200).json(array);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const arrayIndex = array.findIndex((p) => p.id == id);

array.splice(arrayIndex, 1);
  res.status(200).json(array);
});
module.exports = router;
