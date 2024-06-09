const pool = require('../config/database');
const { getUsers } = require('../controllers/personController');

const UserModel = {
  async createUser(name, surname) {
    const result = await pool.query('INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *', [name, surname]);
    return result.rows[0];
  },
  async updateUser(id, name, surname) {
    const result = await pool.query('UPDATE person SET name=$1, surname=$2 WHERE id=$3 RETURNING *', [name, surname, id]);
    return result.rows[0];
  },
  async getUsers() {
    const result = await pool.query('SELECT * FROM person');
    return result.rows;
  }
};

module.exports = UserModel;
