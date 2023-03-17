const express = require("express");
const { getTodo, createTodo, deleteTodo } = require("../controllers/todoController");
const router = express.Router();
router.route("/").get(getTodo).post(createTodo).delete(deleteTodo)
module.exports = router;
