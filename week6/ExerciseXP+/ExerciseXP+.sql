-- Create the students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(255),
    first_name VARCHAR(255),
    birth_date DATE
);

-- Insert data into the students table
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

-- Fetch all data from the table
SELECT * FROM students;

-- Fetch first_names and last_names
SELECT first_name, last_name FROM students;

-- Fetch the student with id = 2
SELECT * FROM students WHERE id = 2;

-- Fetch the student with last_name = 'Benichou' AND first_name = 'Marc'
SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch students with last_names = 'Benichou' OR first_names = 'Marc'
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch students whose first_names contain the letter 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- Fetch students whose first_names start with the letter 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';

-- Fetch students whose first_names end with the letter 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- Fetch students whose second to last letter of their first_names are 'a'
SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) = 'a';

-- Fetch students whose id's are equal to 1 AND 3
SELECT first_name, last_name FROM students WHERE id IN (1, 3);

-- Fetch students whose birth_dates are equal to or come after '2000-01-01'
SELECT * FROM students WHERE birth_date >= '2000-01-01';
