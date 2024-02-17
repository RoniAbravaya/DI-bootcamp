const express = require('express');
const app = express();
const todoRouter = require('./routes/todos.js');
const booksRouter = require('./routes/books.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Homepage');
  });
  
  app.get('/about', (req, res) => {
    res.send('About Us page');
  });




// Mounting the todoRouter
app.use('/api/todos', todoRouter);
app.use('/api/books', booksRouter);



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
