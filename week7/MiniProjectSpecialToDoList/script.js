document.addEventListener('DOMContentLoaded', () => {
    const tasksList = document.getElementById('tasks-list');
    const addTaskForm = document.getElementById('add-task-form');
  
    // Fetch tasks from the server and display them
    fetchTasks();
  
    addTaskForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const name = document.getElementById('task-name').value;
      const description = document.getElementById('task-description').value;
      const startDate = document.getElementById('task-start-date').value;
      const endDate = document.getElementById('task-end-date').value;
  
      if (name && description && startDate && endDate) {
        // Add task to the server
        await addTask({ name, description, startDate, endDate });
  
        // Fetch and display updated tasks
        fetchTasks();
  
        // Clear the form
        addTaskForm.reset();
      }
    });
  
    async function fetchTasks() {
      // Fetch tasks from the server
      const tasks = await getTasks();
  
      // Display tasks on the page
      displayTasks(tasks);
    }
  
    async function getTasks() {
      // Fetch tasks from the server (you need to implement this route on the server)
      const response = await fetch('http://localhost:5432/tasks');
      const tasks = await response.json();
      return tasks;
    }
  
    async function addTask(task) {
      // Send task data to the server to add it to the database (you need to implement this route on the server)
      await fetch('localhost/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    }
  
    function displayTasks(tasks) {
      tasksList.innerHTML = '';
  
      tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${task.name}</strong><br>${task.description}<br>Start Date: ${task.startDate}<br>End Date: ${task.endDate}`;
        tasksList.appendChild(listItem);
      });
    }
  });
  

