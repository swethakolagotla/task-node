const express=require("express");
const router=express.Router();
const {authenticateToken}=require("../auth/Token");
const { getData } = require("../controllers/taskController");
router.get("/", authenticateToken,getData);
module.exports=router