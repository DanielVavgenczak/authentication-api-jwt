import {Router} from 'express';
import {validate} from '../app/requests/index'; 
import {sign} from '../app/requests/sign';
import AuthController from '../app/controllers/AuthController';

const authRoutes = new Router();

authRoutes.post("/sigin", sign, validate, AuthController.create);

export default authRoutes;