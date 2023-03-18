const express = require("express");
const { getData, UpdateData, deleteData } = require("../controllers/calController");
const {authenticateToken}=require("../auth/Token")
const router = express.Router();
router
  .route("/")
  .get(authenticateToken, getData)
  .put(authenticateToken, UpdateData)
  .delete(authenticateToken, deleteData);
module.exports = router;
