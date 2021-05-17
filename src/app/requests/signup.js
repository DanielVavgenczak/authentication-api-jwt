import {check} from 'express-validator';

export const signupValidate = [

    check('firstname')
        .notEmpty()
        .withMessage('Firstname is required'),

    check('lastname')
        .notEmpty()
        .withMessage('Lastname is required'),
    
    check('email','Email is required')
        .notEmpty()
        .isEmail()
        .withMessage('Plese enter email valid'),
    
    check('password','Password must contain +5 chars')
        .isLength({min:6})
        .not()
        .notEmpty()
        .withMessage('Password is required'),
        
    check('password_confirmation')
        .notEmpty()
        .withMessage('Password confirmation is required')
        .custom(async (password_confirmation, {req}) => {           
            if(password_confirmation !== req.body.password){
                throw new Error("Passwords don't match");
            }
        })
];

