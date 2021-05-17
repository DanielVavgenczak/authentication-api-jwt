import User from '../models/User';
import AppErro from '../errors/AppErro';

class UserService {
    
    async create(firstname, lastname, email, password) {

        const user = await User.findOne({email});

        if(user) {
            throw new AppErro('User is alread',  403);
        }

        const newUser = await User.create({firstname, lastname, email, password});

        return {
            firstname,
            lastname,
            email,
            fullname: newUser.fullname
        };
    }

    async getAllUsers(limit = 3, page = 1) {
        const users = await User.find({})
                                .limit(limit * 1)
                                .skip((page - 1) * limit)
                                .select(['firstname','lastname','fullname','email']);

        if(!users) {
            throw new AppErro('No users found',403)
        }
        return users;
    }
}

export default UserService;