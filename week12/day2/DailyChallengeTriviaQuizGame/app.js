// app.js

const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

app.use(express.json());

// Mount the quizRouter
app.use('/quiz', quizRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
