// ThemeSwitcher.js
import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeSwitcher.css"; // Import the component-specific CSS file

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;