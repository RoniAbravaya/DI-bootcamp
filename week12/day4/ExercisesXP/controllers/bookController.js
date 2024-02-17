const db = require('../config/dbConfig');


// Get all posts
exports.getAllBooks = async (req, res) => {
  try {
    const posts = await db('books').select('*');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific post
exports.getBooksById = async (req, res) => {
  try {
    const post = await db('books').where({ id: req.params.id }).first();
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new post
exports.createBooks = async (req, res) => {
  try {
    const [id] = await db('books').insert(req.body);
    const post = await db('books').where({ id }).first();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a post
exports.updateBooks = async (req, res) => {
  try {
    const updated = await db('books').where({ id: req.params.id }).update(req.body);
    if (updated) {
      const post = await db('books').where({ id: req.params.id }).first();
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a post
exports.deleteBooks = async (req, res) => {
  try {
    const deleted = await db('books').where({ id: req.params.id }).del();
    if (deleted) {
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
