const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const packingRoutes = require('./routes/packing.js');
const helpingRoutes = require('./routes/helping.js');
const cookingRoutes = require('./routes/cooking.js');
const dataRoutes = require('./routes/data.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mounting route handlers

app.use('/', express.static(__dirname + '/public'));
app.use("/api/packing", packingRoutes);
app.use('/api/helping', helpingRoutes);
app.use('/api/cooking', cookingRoutes);
app.use('/api', dataRoutes);

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error:', err);
//   res.status(500).json({ error: 'Internal server error' });
// });



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
