import React, { useState } from 'react';
import quotes from './quotes';

const RandomQuoteBox = () => {
  const [quote, setQuote] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('');
  const [quoteColor, setQuoteColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  // Function to generate a random quote
  const generateRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === quote);

    setQuote(quotes[randomIndex]);
    setRandomColors();
  };

  // Function to generate random colors
  const setRandomColors = () => {
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Initial rendering of a random quote and colors
  useState(() => {
    generateRandomQuote();
  }, []);

  return (
    <div className="quote-box-container">
      <div
        className="quote-box"
        style={{ backgroundColor: backgroundColor, color: quoteColor }}
      >
        <h1>{quote.quote}</h1>
        <p>- {quote.author}</p>
        <button
          style={{ backgroundColor: buttonColor }}
          onClick={generateRandomQuote}
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteBox;
