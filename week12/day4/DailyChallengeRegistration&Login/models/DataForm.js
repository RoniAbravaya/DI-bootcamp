const db = require('../config/knex');

const dataForm = new DataForm();

class DataForm {
  constructor(category) {
    // Assuming you have a default table name for the form data
    this.tableName = category;
  }

  async getDataByLocation(location) {
    try {
      // Query the database to fetch data based on category and location
      const data = await db.select().from(category).where('location', location);
      return data;
    } catch (error) {
      // If an error occurs during database query, throw the error
      console.error(error);
      throw new Error('Internal server error');
    }
  }
}

module.exports = DataForm;
