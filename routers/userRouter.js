import express from 'express';
import {
  changePassword, editProfile, userDetail, users,
} from '../controllers/userController';
import routes from './routes';

const userRouter = express.Router();

export const getLogin = (req, res) => res.render('login', { pageTitle: 'Log In' });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
