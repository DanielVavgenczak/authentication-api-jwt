import {Router} from 'express';
import userRouter from './userRoutes';
import authRouter from './authRoutes';

const router = new Router();

router.use(userRouter);
router.use(authRouter);

export default router;