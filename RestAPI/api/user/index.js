var express = require("express");
var router = express.Router();
var controller = require("./user.controller");

router.get("/", controller.index);

module.exports = router;
