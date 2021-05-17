import jwt from '../config/jwt';
import {verify} from 'jsonwebtoken';
import AppErro from '../errors/AppErro';

export default async (request, response, next) => {

    const {authorization} = request.headers;

    if(!authorization) {
        throw new AppErro('Token in not provide', 403);
    }

    const token = authorization.replace('Bearer','').trim();

    try{
        verify(token, jwt.secret, function(err, decoded) {
            if(err){
                throw new AppErro(`${err}`, 403);
            }

            request.user_id = decoded.id;

            return next();
        });
    }catch(err){
       
        throw new AppErro('Token is invalid', 403); 
    }
}