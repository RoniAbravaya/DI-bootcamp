// models/FormData.js
const db = require('../config/knex');

class FormData {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async insert(data) {
    try {
      await db(this.tableName).insert(data);
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }
}

module.exports = FormData;
