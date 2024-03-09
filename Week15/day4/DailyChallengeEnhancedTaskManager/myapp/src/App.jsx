import React, { useReducer, useState, useRef } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      // Toggle completion status of a todo
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT_TODO":
      // Edit the text of a todo
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleEditTodo = (id) => {
    setEditText(todos.find((todo) => todo.id === id).text);
    inputRef.current.focus();
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_TODO", id, text: editText });
    setEditText("");
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos
          .filter((todo) => {
            if (filter === "completed") return todo.completed;
            if (filter === "active") return !todo.completed;
            return true;
          })
          .map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              {todo.id !== editText.id ? (
                <span>{todo.text}</span>
              ) : (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => handleSaveEdit(todo.id)}
                  ref={inputRef}
                />
              )}
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
      </ul>
      <div>
        Filter:{" "}
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("completed")}>Completed</button>
        <button onClick={() => handleFilter("active")}>Active</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
