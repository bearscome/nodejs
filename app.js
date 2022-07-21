
const http = require("http"); // 내장 모듈
const app = http.createServer((req, res)=> {
    console.log(req.url)
    const url = req.url;
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    // 사용하지 않을 경우 한글 깨짐
    // text는 html이고 charset은 utf-8이다 

    // if(url === '/') {
    //     console.log('루트경로')
    //     res.end('안녕하세요')
    // } else if (url === 'login') {
    //     console.log('로그인경로')
    // }
    switch(url) {
        case'/':
            console.log('root dir')
            res.end('안녕하세요')
            break;
        case'/login':
            console.log('login dir')
            break;
        default:
            console.log('다른 ㅇ')
            console.log('req.url', req.url)
            break
    }
});

app.listen(3001, () => {
    console.log('http로 실행된 서버')
})




// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     // root 경로로 요청이 들어오면 실행
//     console.log(req,res)
//     res.send('루트경로입니다.', req, res);
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.")
// })


// app.listen(3000, () => {
//     console.log('서버 시작');
// });