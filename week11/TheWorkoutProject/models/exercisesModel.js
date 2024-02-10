const db = require('../config/knexconnect');

class Exercise {
  static async getAll() {
    return await db('exercises');
  }

  static async getById(id) {
    return await db('exercises').where({ id }).first();
  }

  // Add other CRUD methods as needed
}

module.exports = Exercise;
