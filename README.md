## Cloning YouTube with Vanilla and NodeJS

# Pages :

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload Video
- [x] Video Detail
- [x] Edit Video

# 2.7 미들웨어

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

# 2.8 Module & Router

ES 6 모듈 사용법

export default app; → import app from "./app";
export const 변수명; → import { 변수명 } from "./파일명";

Router
express.Router();

라우트를 카테고리별로 쪼개서 묶을 수 있음.
그럼 주소가 /user/~~~ /video/ ~~~ 이런식으로 나뉠 수 있음.

app.get : get request 에 적용
app.use : 모든 request에 사용될 수있다. (middleware, router...)

# 2.9 MVC

Model / View / Controller

- Model : data
- View : how does the data lock
- Controller : function that looks for data

# 2.12 ~ 2.16 Pug

View template
기존 명칭은 Jade

- html 태그를 사용하지 않고 띄어쓰기 형태의 간단한 문법으로 마크업할 수 있다.
- 띄어쓰기나 들여쓰기 잘못하면 실행이 꼬임.
- html 태그 안에 javascript문을 쓸 때는 #{} 안에 작성하면 된다.

### 세상 명시적인.. 세팅

app 설정
app.set("view endgine", "pug);

block : 상속받을 파일에서 이 부분만 교체 (override 시켜줄 수 있음)
include : 다른 pug 템플릿 파일을 읽어와서 코드를 붙여준다. (header나 footer 같은 global 템플릿을 사용하기에 편하다.)

# 2.17

[Global Variables]

전역적으로 변수를 사용할 수 있게 만들어주는 방법. (res.locals)

1. 미들웨어를 생성한다.
2. 미들웨어를 만들고, 내용으로 res.locals.변수명 << 을 이용해서, 변수를 생성할 수 있다.

위와 같이 생성한, 변수는 어디에서나 사용할 수 있다.

[Template Variables]

각 템플릿에 해당하는 각각의 변수를 생성할 수 있다.

1. Pug에서 원하는 변수를 원하는 위치에 적어준다 #{변수}
2. 컨트롤러로 찾아간다 !
3. res.render 에 첫번째 요소로 pug파일을 지정해줬다면, 두번째 요소로는 원하는 변수를 할당해줄 수 있다. ( JSON 형식 )

# 2.18

[queryString]

사용자가 입력 데이터를 전달하는 방법중의 하나로, url 주소에 미리 협의된 데이터를 파라미터를 통해 넘기는 것을 말한다.

1. HTML(PUG)에서 form + input 으로 정보를 보낸다. 여기서 form태그는 get방식이어야하며, input태그의 name값이 쿼리이름이 된다.
2. Controller에서, req.query << 로 input의 name값으로 보낸 데이터를 받는다.
3. 그리고 위 데이터를 다시 PUG로 전달해서 받아준다.

# 2.19

[ POST방식 데이터 전송 ]

1. HTML(PUG)에서, form태그 method를 post로 설정해주고, input에 name속성을 추가해서 정보를 보낸다.
2. 라우팅에서 기존에 사용하던 get이 아닌, post로 또다른 하나를 만들어 데이터를 받을 예정.

@@
join과 login 왜 둘다 action을 'login'으로 잡지?
왜 이걸 다 /logIn으로 보내주지?,,,

-> 다음영상에서 해결됨.
join 은 /join으로 보내준다. POST << 방식으로, 따라서 이 데이터를 받아 POST에서 처리해서 데이터를 받고, 회원가입을 진행
login에서 받은 /login 또한 POST 방식으로 받아서, 데이터베이스를 검색하지 않을까?

# 2.20

/users/edit-profile 로 접속하면 users/:id 로 접속한걸로 라우터는 이해한다. (이 부분은 선언된 순서되로 인지되게 되므로 userRouter의 선언 순서를 바꿔줘야한다.)

# 2.21

video tag 참조
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

# 2.22

[mixin]
html 에서 자주 사용되는 문법을 담고 있다. 재활용할 수 있는 코드를 묶어두는 거다. 아주 심플하고 작은 단위의 class나 컴포넌트와 유사함..

video 재생이슈

1. app.use(helmet({contentSecurityPolicy: false}))
   or
2. meta(http-equip=Content-Security-Policy" content="default-src \*") 를 main.pug
   head 아래에 추가.

# 3.1 ~ 3.2

MongoDB
https://www.notion.so/mongoDB-5ac57acd014148929978167880325afb

# 3.5

처음 videos 파일 데이터는 없으므로, try / catch 에러대응을 적용한다.
upload 되는 파일은 middleware 에서 file을 upload 하고 URL을 복사해서 database 에 저장한다.
