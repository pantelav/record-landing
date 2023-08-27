const express = require("express");
const router = express.Router();
const createOrder = require('../middlewares/createOrder')
const botSender = require('../middlewares/botSender')


router.post("/order", createOrder, botSender)

module.exports = router;
