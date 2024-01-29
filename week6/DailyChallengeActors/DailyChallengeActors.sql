SELECT COUNT(actor_id) AS actor_count FROM actor;


INSERT INTO actor (first_name, last_name, last_update)
VALUES ('Roni', 'Nul', '2024-01-29');

SELECT * FROM actor WHERE first_name = 'Roni' AND last_name = 'Nul';

-- 201	"Roni"	"Nul"	"2024-01-29 00:00:00"
