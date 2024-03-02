import React, { useState } from 'react';
import styles from './App.module.css'; // Import CSS Modules

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    setLanguages(prevLanguages => {
      const newLanguages = [...prevLanguages];
      newLanguages[index].votes++;
      return newLanguages;
    });
  };

  return (
    <div className={styles.app}>
      <h1>Vote for Your Favorite Programming Language</h1>
      <ul className={styles.languagesList}>
        {languages.map((language, index) => (
          <li key={index}>
            <button onClick={() => handleVote(index)} className={styles.languageButton}>
              {language.name} - Votes: {language.votes}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
