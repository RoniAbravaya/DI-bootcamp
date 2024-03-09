import React from "react";
import "./SuperheroCard.css";

function SuperheroCard({ superhero, onClick }) {
  return (
    <div className="superhero-card" onClick={onClick}>
      <img src={superhero.image} alt={superhero.name} />
      <h3>{superhero.name}</h3>
      <p>{superhero.occupation}</p>
    </div>
  );
}

export default SuperheroCard;
