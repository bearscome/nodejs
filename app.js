const express = require("express");
const app = express();

//view app setting;
app.set("views", "./views"); // view파일은 views폴더에 작성
app.set("view engine", "ejs"); // view engine은 ejs


app.get("/", (req, res) => {
    res.render("home/index") // views폴더를 고정했으니 경로는 자동으로 views폴더부터 시작
});

app.get("/login", (req, res) => {
    res.render("home/login")
})


app.listen(3000, () => {
    console.log('서버 시작');
});