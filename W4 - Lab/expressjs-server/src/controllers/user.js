import { userDb } from "../seeders/seeder.js";

class UserController {
  static createUser(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
      id: (userDb.length + 1).toString(),
      name,
      email
    };

    userDb.push(newUser);
    return res.status(201).json({ message: 'User created successfully', user: newUser });
  }

  static getAllUsers(req, res) {
    return res.json({ users: userDb });
  }
}

export default UserController;