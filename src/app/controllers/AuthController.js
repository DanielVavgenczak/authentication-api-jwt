import AuthService from "../services/AuthService";

class AuthController {
  async create(request, response) {
    const userService = new AuthService();
    const { email, password } = request.body;
    try {
      const user = await userService.authenticate(email, password);
            
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new AuthController();
