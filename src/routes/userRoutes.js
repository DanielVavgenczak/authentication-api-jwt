import {Router} from 'express';
import {validate} from '../app/requests/index';
import {signupValidate} from '../app/requests/signup';
import auth from '../app/middleware/auth';
import UserController from '../app/controllers/UserController';

const userRouter = new Router();

userRouter.post('/signup', signupValidate, validate, UserController.create);
userRouter.get('/me', auth, UserController.me);
userRouter.get('/users',  UserController.listUsers);

export default userRouter;