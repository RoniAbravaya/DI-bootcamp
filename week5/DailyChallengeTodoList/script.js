

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskId = tasks.length;
        const taskObject = { task_id: taskId, text: taskText, done: false };
        tasks.push(taskObject);

        renderTask(taskObject);
        taskInput.value = "";
    }
}

function addTask(task) {
    const listTasks = document.querySelector(".listTasks");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `taskCheckbox_${task.task_id}`;
    checkbox.checked = task.done;
    checkbox.addEventListener("change", function () {
        doneTask(task.task_id);
    });

    const label = document.createElement("label");
    label.setAttribute("for", `taskCheckbox_${task.task_id}`);
    label.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.addEventListener("click", function () {
        deleteTask(task.task_id);
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteButton);

    listTasks.appendChild(taskDiv);
}

function doneTask(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        const checkbox = document.getElementById(`taskCheckbox_${taskId}`);
        const label = checkbox.nextElementSibling;

        if (task.done) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
}

function deleteTask(taskId) {
    const index = tasks.findIndex(t => t.task_id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        updateTaskList();
    }
}

function updateTaskList() {
    const listTasks = document.querySelector(".listTasks");
    listTasks.innerHTML = "";
    tasks.forEach(task => renderTask(task));
}


















document.addEventListener("DOMContentLoaded", function () {
    const tasks = [];

    function addTask(task) {
        const listTasks = document.querySelector(".listTasks");

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `taskCheckbox_${task.task_id}`;
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function () {
            doneTask(task.task_id);
        });

        const label = document.createElement("label");
        label.setAttribute("for", `taskCheckbox_${task.task_id}`);
        label.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.addEventListener("click", function () {
            deleteTask(task.task_id);
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        taskDiv.appendChild(deleteButton);

        listTasks.appendChild(taskDiv);
    }

    function doneTask(taskId) {
        const task = tasks.find(t => t.task_id === taskId);
        if (task) {
            task.done = !task.done;
            const checkbox = document.getElementById(`taskCheckbox_${taskId}`);
            const label = checkbox.nextElementSibling;

            if (task.done) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        }
    }

    function deleteTask(taskId) {
        const index = tasks.findIndex(t => t.task_id === taskId);
        if (index !== -1) {
            tasks.splice(index, 1);
            updateTaskList();
        }
    }

    function updateTaskList() {
        const listTasks = document.querySelector(".listTasks");
        listTasks.innerHTML = "";
        tasks.forEach(task => renderTask(task));
    }

    function addTask() {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskId = tasks.length;
            const taskObject = { task_id: taskId, text: taskText, done: false };
            tasks.push(taskObject);

            renderTask(taskObject);
            taskInput.value = "";
        }
    }
});
