// app.js

// Import the TodoList class from the todo.js module
import { TodoList } from './todo.js';

// Create an instance of the TodoList class
const todoList = new TodoList();

// Add tasks
todoList.addTask('Task 1');
todoList.addTask('Task 2');
todoList.addTask('Task 3');

// Mark some tasks as complete
todoList.completeTask(0);
todoList.completeTask(2);

// List all tasks
todoList.listTasks();
