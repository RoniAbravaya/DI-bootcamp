// server.js

// Require the express package
const express = require('express');

// Set up an Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Simulated database array
let data = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' }
];

// GET /posts: Return a list of all blog posts
app.get('/posts', (req, res) => {
  res.json(data);
});

// GET /posts/:id: Return a specific blog post based on its id
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = data.find(post => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// POST /posts: Create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const id = data.length + 1;
  const newPost = { id, title, content };
  data.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id: Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const index = data.findIndex(post => post.id === id);
  if (index !== -1) {
    data[index] = { id, title, content };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// DELETE /posts/:id: Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(post => post.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'Post deleted successfully' });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Invalid route' });
});

// Error handling for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Start the Express app and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
