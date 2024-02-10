const express = require('express');
const app = express();
const sampleRoutes = require('./routes/sampleRoutes');

app.use(express.json());

// Routes
app.use('/', sampleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
