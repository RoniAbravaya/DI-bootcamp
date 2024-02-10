// Import the express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a basic data array containing book objects
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2000 },
  { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2005 },
  { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2010 }
];

// Set up the app to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Implement the "Read all" route at GET /api/books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Implement the "Read" route at GET /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Implement the "Create" route at POST /api/books
app.post('/api/books', express.json(), (req, res) => {
  const { title, author, publishedYear } = req.body;
  const id = books.length + 1;
  const newBook = { id, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
});
