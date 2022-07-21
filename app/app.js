// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home")

//view app setting;
app.set("views", "./views"); // view파일은 views폴더에 작성
app.set("view engine", "ejs"); // view engine은 ejs


app.use("/", home) // 미들웨어를 등록하는 매소드 -> 라우트 개념

module.exports = app;