// routes/quiz.js

const express = require('express');
const router = express.Router();

// Sample trivia quiz questions and answers
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let userScore = 0;

// Get the first question
router.get('/', (req, res) => {
  currentQuestionIndex = 0;
  userScore = 0;
  const currentQuestion = triviaQuestions[currentQuestionIndex];
  res.json({ question: currentQuestion.question });
});

// Submit an answer to the current question
router.post('/', (req, res) => {
  const { answer } = req.body;
  const currentQuestion = triviaQuestions[currentQuestionIndex];
  if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    userScore++;
    res.json({ correct: true, score: userScore });
  } else {
    res.json({ correct: false, score: userScore });
  }
});

// Display the final score
router.get('/score', (req, res) => {
  res.json({ score: userScore });
});

module.exports = router;
