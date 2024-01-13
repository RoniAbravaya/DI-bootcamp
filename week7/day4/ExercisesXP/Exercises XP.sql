-- :star2: Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- Get a list of all the languages, from the language table.
SELECT * FROM language
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT film.title , film.description , language.name FROM film
INNER JOIN language ON film.language_id = language.language_id
-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT film.title , film.description , language.name FROM film
RIGHT JOIN language ON film.language_id = language.language_id
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	id serial primary key,
	name varchar (100)
)
INSERT INTO new_film (name)
VALUES
('Star wars'),
('Lotf of the rings'),
('Star Trek'),
('Harry Potter')
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.

CREATE TABLE customer_review (
	review_id serial primary key,
	film_id integer references new_film(id) not null ,
	language_id integer references language(language_id) not null ,
	title varchar (110),
	score integer,
	review_text varchar (10000),
	last_update date
	
	
)

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES ( 1, 1, 'Star Wars' , 10 ,'A great space opera!','2024-01-13'),
(1 , 1 , 'Lord of the rings' , 10 , 'An epic fantasy masterpiece','2024-01-13' )

SELECT * FROM customer_review

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film
WHERE id = 1;


-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.


-- Use UPDATE to change the language of some films. Make sure that you use valid languages.


UPDATE film
SET language_id = 3
WHERE film_id = 3;

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

SELECT 
    conname AS constraint_name,
    conrelid::regclass AS table_name,
    a.attname AS column_name,
    confrelid::regclass AS referenced_table,
    af.attname AS referenced_column
FROM 
    pg_constraint AS c
JOIN 
    pg_attribute AS a ON a.attnum = ANY(c.conkey) AND a.attrelid = c.conrelid
JOIN 
    pg_attribute AS af ON af.attnum = ANY(c.confkey) AND af.attrelid = c.confrelid
WHERE 
    conrelid = 'customer_review'::regclass

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?


DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).


SELECT COUNT(1) AS number_of_null_return_dates
FROM rental
WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)


SELECT film.title, payment.amount
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
RIGHT JOIN payment ON rental.rental_id = payment.rental_id
WHERE rental.return_date IS NULL
ORDER BY payment.amount DESC
LIMIT 30;


-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.



SELECT film.title, film.description, actor.first_name, actor.last_name
FROM film
LEFT JOIN film_actor ON film_actor.film_id = film.film_id
LEFT JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE film.description LIKE '%sumo wrestler%'
  AND actor.first_name = 'Penelope'
  AND actor.last_name = 'Monroe';
  
--   The 2nd film : A short documentary (less than 1 hour long), rated “R”.
  
  SELECT film.title, film.length, film.rating, category.name
FROM film
LEFT JOIN film_category ON film.film_id = film_category.film_id
LEFT JOIN category ON category.category_id = film_category.category_id
WHERE category.name = 'documentary'
  AND film.length < 60
  AND film.rating= 'R';
  
--   The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
  
SELECT film.title, payment.amount, customer.first_name, customer.last_name, rental.return_date
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
RIGHT JOIN payment ON rental.rental_id = payment.rental_id
RIGHT JOIN customer ON customer.customer_id = payment.customer_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND payment.amount > 4
  AND rental.return_date >= '2025-07-28' AND rental.return_date < '2025-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT film.title, film.description, film.replacement_cost
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN customer ON customer.customer_id = payment.customer_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND (film.title LIKE '%boat%' OR film.description LIKE '%boat%')
  AND film.replacement_cost > 20;




