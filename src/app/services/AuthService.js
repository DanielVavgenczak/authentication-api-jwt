import AppError from '../errors/AppErro';
import User from '../models/User';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import jwt from '../config/jwt';

export default class AuthService {

    async authenticate(email, password){

        const user = await User.findOne({email});

        if(!user) {
            throw new AppError(`Email/password invalid`, 403);
        }      

        const passwordCompare = await compare(password, user.password)
        
        if(!passwordCompare){
            throw new AppError(`Email/password invalid`, 403);
        }

        const token = sign({id:user._id}, jwt.secret,{
            expiresIn: jwt.expiredIn
        });

        return {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.lastname,
            fullname: user.fullname,
            token
        };
    }

    async me(id){
        const user = await User.findById(id);

        if(!user) {
            throw new AppError(`User not found`, 403);
        }

        return {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            fullname: user.fullname,
        };
    }
}  
