const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [
    { id: 1, task: 'Finish homework', completed: false },
    { id: 2, task: 'Buy groceries', completed: true },
    { id: 3, task: 'Go to the gym', completed: false }
];

// Get all to-do items
router.get('/', (req, res) => {  // Change '/api/todos' to '/'
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { task } = req.body;  // Change 'text' to 'task'
  const newTodo = { id: Date.now(), task, completed: false }; // Ensure 'completed' property is set
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body; // Change 'text' to 'task'
  const todoToUpdate = todos.find(todo => todo.id === parseInt(id));
  if (!todoToUpdate) return res.status(404).json({ message: 'Todo not found' });
  todoToUpdate.task = task; // Change 'text' to 'task'
  res.json(todoToUpdate);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: 'Todo not found' });
  todos.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
