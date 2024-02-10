const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const shuffle = require('lodash.shuffle');

const app = express();
const PORT = 3000;

// Sample emojis
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Get random emoji and options
function getRandomEmojiAndOptions() {
    const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomEmojiIndex];
    const incorrectOptions = shuffle(emojis.filter(emoji => emoji !== correctEmoji)).slice(0, 2);
    const options = shuffle([correctEmoji, ...incorrectOptions]);
    return { correctEmoji, options };
}

// Game state
let score = 0;

// Routes
app.get('/', (req, res) => {
    const { correctEmoji, options } = getRandomEmojiAndOptions();
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Guess the Emoji Game</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <div class="container">
            <h1>Guess the Emoji Game</h1>
            <p>Score: ${score}</p>
            <p>Guess the name of the emoji:</p>
            <p>${correctEmoji.emoji}</p>
            <form action="/guess" method="POST">
                ${options.map(option => `
                    <input type="radio" name="guess" value="${option.name}">
                    <label>${option.name}</label><br>
                `).join('')}
                <input type="hidden" name="correctAnswer" value="${correctEmoji.name}">
                <button type="submit">Submit Guess</button>
            </form>
        </div>
    </body>
    </html>
    `);
});


app.post('/guess', (req, res) => {
    const guessedAnswer = req.body.guess;
    const correctAnswer = req.body.correctAnswer;
    if (guessedAnswer === correctAnswer) {
        score++;
        res.send(`
            <p>Congratulations! Your guess "${guessedAnswer}" is correct!</p>
            <a href="/">Play Again</a>
        `);
    } else {
        res.send(`
            <p>Sorry, your guess "${guessedAnswer}" is incorrect. The correct answer is "${correctAnswer}".</p>
            <a href="/">Try Again</a>
        `);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
