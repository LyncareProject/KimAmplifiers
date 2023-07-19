const express = require('express');
const router = express.Router();

const controller = require("../controllers/notice.controller");

router.post("/", controller.create);
router.get("/", controller.findAll);

module.exports = router;