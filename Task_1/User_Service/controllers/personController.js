const UserModel = require('../models/personModel');

const UserController = {
  async createUser(req, res) {
    const { name, surname } = req.body;
    try {
      const user = await UserModel.createUser(name, surname);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create user' });
    }
  },
  async updateUser(req, res) {
    const { id } = req.params;
    const { name, surname } = req.body;
    try {
      const user = await UserModel.updateUser(id, name, surname);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Unable to update user' });
    }
  },
  async getUsers(req, res) {
    try {
      const users = await UserModel.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch users' });
    }
  }
};

module.exports = UserController;
