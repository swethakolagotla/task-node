const express = require("express");
const {userData}=require("../controllers/userController")
const {authenticateToken}=require("../auth/Token")
const router = express.Router();
router.route("/").post( userData);
module.exports = router;
