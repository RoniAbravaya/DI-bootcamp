const knex = require('knex');
const dbConfig = require('../config/dbConfig');

const db = knex(dbConfig);

// Get all posts
const getAllPosts = () => {
  return db('posts');
};

// Get a specific post by ID
const getPostById = (id) => {
  return db('posts').where({ id }).first();
};

// Create a new post
const createPost = (post) => {
  return db('posts').insert(post);
};

// Update a post by ID
const updatePost = (id, post) => {
  return db('posts').where({ id }).update(post);
};

// Delete a post by ID
const deletePost = (id) => {
  return db('posts').where({ id }).del();
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
