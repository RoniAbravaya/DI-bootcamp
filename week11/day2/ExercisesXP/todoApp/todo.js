// todo.js

// Define an ES6 module exporting a TodoList class
export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    // Method to add tasks
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    // Method to mark tasks as complete
    completeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
      }
    }
  
    // Method to list all tasks
    listTasks() {
      console.log('Tasks:');
      this.tasks.forEach((item, index) => {
        console.log(`${index + 1}. ${item.task} - ${item.completed ? 'Completed' : 'Incomplete'}`);
      });
    }
  }
  