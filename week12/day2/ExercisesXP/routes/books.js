// routes/books.js

const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
  ];
  

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: Date.now(), title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookToUpdate = books.find(book => book.id === parseInt(id));
  if (!bookToUpdate) return res.status(404).json({ message: 'Book not found' });
  bookToUpdate.title = title;
  bookToUpdate.author = author;
  res.json(bookToUpdate);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
