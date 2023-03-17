const express = require("express");
const { getData, UpdateData, deleteData } = require("../controllers/calController");
const router = express.Router();
router.route("/").get(getData).put(UpdateData).delete(deleteData);
module.exports = router;
