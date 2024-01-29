-- Create the items table
CREATE TABLE items (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(255),
    price INT
);

-- Insert data into the items table
INSERT INTO items (item_id, item_name, price) VALUES
(1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);

-- Create the customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

-- Insert data into the customers table
INSERT INTO customers (customer_id, first_name, last_name) VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');

-- Fetch data from the database

-- All items
SELECT * FROM items;

-- All items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80;

-- All items with a price below 300 (300 included)
SELECT * FROM items WHERE price <= 300;

-- All customers whose last name is 'Smith' (Note: There are no customers with the last name 'Smith' in the provided data)
SELECT * FROM customers WHERE last_name = 'Smith';

-- All customers whose last name is 'Jones'
SELECT * FROM customers WHERE last_name = 'Jones';

-- All customers whose first name is not 'Scott'
SELECT * FROM customers WHERE first_name != 'Scott';
