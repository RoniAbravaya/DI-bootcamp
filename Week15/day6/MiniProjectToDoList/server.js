// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Get all todos
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await db('todos').select('*');
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'An error occurred while fetching todos' });
  }
});

// Add a new todo
app.post('/api/todos', async (req, res) => {
  const { text } = req.body;
  try {
    const newTodo = await db('todos')
      .insert({ text, completed: false })
      .returning('*');
    res.status(201).json(newTodo[0]);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'An error occurred while adding todo' });
  }
});

// Delete a todo by ID
app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('todos').where({ id }).del();
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'An error occurred while deleting todo' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
