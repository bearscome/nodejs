const express = require("express");
const router = express.Router();

const { output, process } = require("./home.ctrl");

//GET -> ROUTER
router.get("/", output.home);
router.get("/login", output.login);
router.get("/register", output.register);

//POST
router.post("/login", process.login);
router.post("/register", process.register);

module.exports = router;
// javascript의 export와 동일한듯
