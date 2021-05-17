import {check} from 'express-validator';

export const sign = [
    check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Plese enter email valid'),
    
    check('password')
        .notEmpty()
        .withMessage('Password is required')
    
]