
import { userDb } from '../seeders/seeder.js';
import UserController from './user.js';

class AuthController {
  constructor() {
  }

  register(req, res) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const existingUser = userDb.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    userDb.push({ id: String(userDb.length + 1), name, email });

    const allUsers = UserController.getAllUsers(req, res);
    return res.json({ allUsers });
  }

  login(req, res) {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Here you would normally check the user's credentials and generate a token
    // For this example, we'll just return a success message
    return res.json({ message: 'User logged in successfully', user: { email } });
  }
}

export default AuthController;