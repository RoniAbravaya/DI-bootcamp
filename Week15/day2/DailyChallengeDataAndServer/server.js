const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api/hello', (req, res) => {
  res.send("Hello From Express");
});

app.post('/api/world', (req, res) => {
  console.log("Received data from client:", req.body);
  const value = req.body && req.body.value; // Check if req.body exists before accessing its properties
  res.send(`I received your POST request. This is what you sent me: ${value}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
