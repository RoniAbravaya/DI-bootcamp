// App.js
import React, { useRef, useState ,useReducer } from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import "./App.css"; // Import the global CSS file

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



function App() {

  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };


  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCharCount(textLength);
  };


  return (
    <ThemeProvider>
      <div className="container"> {/* Apply global container styles */}
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        {/* Other components here */}
      </div>

      <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {charCount}</p>
    </div>

    <div className="App">
      <TodoList />
    </div>




    
    </ThemeProvider>
  );
}

export default App;