import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { localsMiddleware } from './middlewares';
import routes from './routers/routes';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' https:///archive.org");
  return next();
});

app.set('view engine', 'pug');
// 누군가 /uploads 로 접근하면 디렉토리에서 file을 전달해준다.
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
