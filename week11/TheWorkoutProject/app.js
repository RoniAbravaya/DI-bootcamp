const express = require('express');
const exercisesRoutes = require('./routes/exercisesRoutes');
const workoutsRoutes = require('./routes/workoutsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const userWorkoutsRoutes = require('./routes/userWorkoutsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/exercises', exercisesRoutes);
app.use('/workouts', workoutsRoutes);
app.use('/users', usersRoutes);
app.use('/user-workouts', userWorkoutsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
