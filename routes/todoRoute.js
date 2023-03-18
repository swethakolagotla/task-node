const express = require("express");
const { getTodo, createTodo, deleteTodo } = require("../controllers/todoController");
const {authenticateToken}=require("../auth/Token")
const router = express.Router();
router
  .route("/")
  .get(authenticateToken, getTodo)
  .post(authenticateToken, createTodo)
  .delete(authenticateToken, deleteTodo);
module.exports = router;
