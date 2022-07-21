const express = require("express");
const router = express.Router();

const {home, login} = require('./home.ctrl')


router.get("/", home);

router.get("/login", login)

module.exports = router;
// javascript의 export와 동일한듯