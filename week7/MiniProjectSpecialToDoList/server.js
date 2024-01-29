const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = 5432;

app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
});

// Route to get all tasks
app.get('http://localhost:5432/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Route to add a new task
app.post('http://localhost:5432/tasks', async (req, res) => {
  const { name, description, startDate, endDate } = req.body;
  try {
    await pool.query(
      'INSERT INTO tasks (name, description, start_date, end_date) VALUES ($1, $2, $3, $4)',
      [name, description, startDate, endDate]
    );
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.post('/tasks', async (req, res) => {
    const { name, description, startDate, endDate } = req.body;
    try {
      await pool.query(
        'INSERT INTO tasks (name, description, start_date, end_date) VALUES ($1, $2, $3, $4)',
        [name, description, startDate, endDate]
      );
      res.sendStatus(201); // 201 Created
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  