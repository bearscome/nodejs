const express = require("express");
const router = express.Router();

const {output, process} = require('./home.ctrl')


router.get("/", output.home);
router.get("/login", output.login)
router.post("/login", process.login)

module.exports = router;
// javascript의 export와 동일한듯