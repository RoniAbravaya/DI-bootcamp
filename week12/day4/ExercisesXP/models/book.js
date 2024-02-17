const dbConfig = require('../config/dbConfig');
const knex = require('knex');
const db = knex(dbConfig);


// Get all posts
const getAllBooks = () => {
    return db('books');
  };
  
  // Get a specific post by ID
  const getBooksById = (id) => {
    return db('books').where({ id }).first();
  };
  
  // Create a new post
  const createBooks = (post) => {
    return db('books').insert(post);
  };
  
  // Update a post by ID
  const updateBooks = (id, post) => {
    return db('books').where({ id }).update(post);
  };
  
  // Delete a post by ID
  const deleteBooks = (id) => {
    return db('books').where({ id }).del();
  };
  
  module.exports = {
    getAllBooks,
    getBooksById,
    createBooks,
    updateBooks,
    deleteBooks,
  };
  
