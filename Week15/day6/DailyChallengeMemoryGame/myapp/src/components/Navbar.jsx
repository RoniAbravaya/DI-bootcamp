import React from "react";
import "./Navbar.css";

function Navbar({ score, topScore }) {
  return (
    <nav className="navbar">
      <h1>Superhero Memory Game</h1>
      <div className="scores">
        <p>Current Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  );
}

export default Navbar;
