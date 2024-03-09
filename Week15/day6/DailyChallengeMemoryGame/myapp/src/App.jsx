import React, { useState } from "react";
import SuperheroesData from "./SuperheroesData";
import SuperheroCard from "./components/SuperheroCard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
    }
    shuffleCards();
  };

  const shuffleCards = () => {
    const shuffledSuperheroes = [...SuperheroesData.superheroes].sort(() => Math.random() - 0.5);
    SuperheroesData.superheroes = shuffledSuperheroes;
  };

  return (
    <div className="App">
      <Navbar score={score} topScore={topScore} />
      <h1>Superhero Collection</h1>
      <div className="superhero-container">
        {SuperheroesData.superheroes.map(superhero => (
          <SuperheroCard
            key={superhero.id}
            superhero={superhero}
            onClick={() => handleCardClick(superhero.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
