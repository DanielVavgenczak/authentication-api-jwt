import User from '../models/User';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

class UserController {
    
    async create(request, response){
        const userService = new UserService();
        const {firstname, lastname, email, password} = request.body;

        const user = await userService.create(firstname, lastname, email, password);

        return response.json(user);
    }

    async me(request, response) {
        const authService = new AuthService();
        
        const {user_id} = request;

        const user = await authService.me(user_id);

        return response.json(user);
        
    }

    async listUsers(request, response) {
        const {limit, page} = request.query;

        const userService = new UserService();

        const users = await userService.getAllUsers(limit, page);
        return response.json(users);
    }
}

export default new UserController();