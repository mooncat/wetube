## Cloning YouTube with Vanilla and NodeJS


### 2.7 미들웨어 
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


body-parser : 서버가유저로부터 받은 데이터를 이해하기 위해 선언됨.
cookie- parser : 유저로부터 받은 cookie 를 이해하기 위해서.
순차적으로 실행되므로. 
cookie-parser -> body-parser -> morgan(기록) -> helmet (보안)



### 2.8 Module & Router

ES 6 모듈 사용법


export default app; → import app from "./app";
export const 변수명; → import { 변수명 } from "./파일명";

Router
express.Router();

라우트를 카테고리별로 쪼개서 묶을 수 있음.
그럼 주소가 /user/~~~ /video/ ~~~ 이런식으로 나뉠 수 있음.

app.get : get request 에 적용
app.use : 모든 request에 사용될 수있다. (middleware, router...)


### 2.9 MVC
Model  / View  / Controller

- Model : data 
- View : how does the data lock 
- Controller : function that looks for data


### 2.12 ~ 2.16 Pug
View template 
기존 명칭은 Jade
- html 태그를 사용하지 않고 띄어쓰기 형태의 간단한 문법으로 마크업할 수 있다.
- 띄어쓰기나 들여쓰기 잘못하면 실행이 꼬임.

# 세상 명시적인.. 세팅
app 설정
app.set("view endgine", "pug); 

block : 상속받을 파일에서 이 부분만 교체 (override 시켜줄 수 있음)
include : 다른 pug 템플릿 파일을 읽어와서 코드를 붙여준다. (header나 footer 같은 global 템플릿을 사용하기에 편하다.)

