// db.js
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'postgres',
  },
});

module.exports = db;
