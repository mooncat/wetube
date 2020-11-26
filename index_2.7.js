import express from "express"
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


const app = express()
const PORT = 4000


// const consoleMiddleware = (req, res, next) => {
//   console.log("I'm a middleware");
//   next();
// };

const protectedMiddleware = (req, res) => {
  res.redirect("/");
};

// middleware 함수는 get 함수보다 앞에 use 로 선언되어야 한다.
// app.use(consoleMiddleware);

/** 
    * 복습용 (미들웨어)
    미들웨어란 ? 라우트(유저)와 실행하는 콜백함수(응답) 사이에서 동작하는 함수.
    적용방법은,
    전역으로 적용하는 = app.use() ;
    각각 적용하는 = 라우팅 과 콜백함수 사이에 쓰는방법;
    두가지.

    모든 미들웨어함수는 유저- 응답 사이에서 동작하므로 미들웨어가 끝나고 난 뒤, 응답(콜백함수)를 실행하기 위해서 next() 가 필수적임. 
    next()가 아니라 send 콜백을 사용하게 되면 미들웨어에서 서버를 kill-중단시킬 수 있음.

    주요 미들웨어로는
    Morgan - 로그를 남겨줌
    helmet - 기초보안담당함
    cookieParser - 쿠키를 다룰 수 있음
    bodyParser - form데이터를 서버로 받아와서 활용가능함.
    *
 */


 /**
  * body-parser : 서버가유저로부터 받은 데이터를 이해하기 위해 선언됨.
  * cookie- parser : 유저로부터 받은 cookie 를 이해하기 위해서.
  * 
  * 순차적으로 실행되므로. 
  * cookie-parser -> body-parser -> morgan(기록) -> helmet (보안)
 **/


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended : true })); 
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());

const middleware = (req, res, next) => {
    res.send('not happening!');
}

app.get("/", middleware, (req, res) => res.send("Home"));
app.get("/about-us", (req, res) => res.send("About Us"));
app.get("/profile", (req, res) => res.send("Profile"));
app.get("/contact", (req, res) => res.send("Contact"));
app.get("/protected", protectedMiddleware, (req, res) => res.send("Protected"));

app.listen(PORT, () => console.log(`Listening on http//localhost:${PORT}`));









