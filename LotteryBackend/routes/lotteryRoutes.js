const express = require("express");
const {checkLottery}  = require("../controllers/lotteryControllers");

const router = express.Router();

router.post("/check-lottery", checkLottery)

module.exports = router;