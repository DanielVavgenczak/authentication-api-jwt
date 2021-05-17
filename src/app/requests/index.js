import {validationResult} from 'express-validator';

export const validate = (request, response, next)=> {
    const errors = validationResult(request)

    if(!errors.isEmpty()){

        let errMsg = [];
        errors.array().map(error => errMsg.push(error.msg))
        return response.status(400).json({errors: errMsg});
    }

    next();
}