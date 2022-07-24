// 모듈
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const accessLogStream = require("./src/config/log");
const bodyParser = require("body-parser");

const app = express();

// 라우팅
const home = require("./src/routes/home");

//view app setting;
app.set("views", "./src/views");
// view파일은 views폴더에 작성
app.set("view engine", "ejs");
// view engine은 ejs
app.use(express.static(`${__dirname}/src/public`));
// 경로 사용
app.use(bodyParser.json());
// 클라이언트 값이 JSON일 때  바디파서 없으면 undefinded가 반환된다
app.use(bodyParser.urlencoded({ extended: true }));
// URL을 통해 전달되는 데이터에 한글, 공백과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));
// 로그 관련 라이브러리
app.use("/", home);
// 라우트

module.exports = app;

// app.use() use메소드는 미들웨어를 등록하는 매소드 ->
