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

// aws 접속
/**
 * CMD -> mysql -h "myendpoint" -u "userId(admin)" -p
 * password : password
 * show mydatabases
 * https://www.youtube.com/watch?v=C7LK20tlQ6Y&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=32 (30번 동영상)
 * aws 세팅 방법
 */
