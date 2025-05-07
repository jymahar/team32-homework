---Meal Queries-----

---Get all meals
SELECT * FROM meal;

--Add a new meal
INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) VALUES 
('Chicken Biryani', 'Enjoy authentic Indian rice dish.', 'Copenhagen', '2025-05-11 18:00:00', 15, 200.00, '2025-05-07');

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 4;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET  max_reservations=1 where id=4;

--Delete a meal with any id, fx 1

DELETE FROM meal WHERE id=4;


------Reservation Queries-----

--Get all reservations
SELECT * from reservation ;

--Add a new reservation
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(4, 3, '2025-04-21', '+4571418075', 'Jyoti Mahar', 'jyoti@gmail.com');

--Get a reservation with any id, fx 1
SELECT * FROM reservation where id=7;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET meal_id=1, contact_name="Jo New Name" where id=7;

--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id=7;

--Review Queries

--Get all reviews
SELECT * from review ;

--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES
('Great dinning experience!', 'The food was tasty and the service was good.', 3, 5, '2025-05-07');

--Get a review with any id, fx 1
SELECT * FROM review where id=4;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET description="The food was very tasty. Will visit again" where id=4;

--Delete a review with any id, fx 1
DELETE FROM review WHERE id=4;

---------------  Additional Queries:  -----------

--Get meals that has a price smaller than a specific price fx 90
SELECT * from meal where price < 90;

--Get meals that still has available reservations
SELECT meal.id,meal.title,count(meal.id) as no_of_bookings, meal.max_reservations FROM meal JOIN reservation ON meal.id= reservation.meal_id
GROUP BY meal_id HAVING  no_of_bookings < meal.max_reservations ;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE "%Pasta%";

--Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2025-04-20' AND '2025-04-21';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;

--Get the meals that have good reviews
SELECT meal.id,meal.title, review.stars as rating FROM meal JOIN review ON meal.id= review.meal_id HAVING rating > 3

--Get reservations for a specific meal sorted by created_date
SELECT  meal.title, reservation.created_date FROM reservation  JOIN meal ON meal.id=reservation.meal_id WHERE meal.title LIKE "%Pasta%"ORDER BY reservation.created_date DESC;

--Sort all meals by average number of stars in the reviews
SELECT  meal.id , meal.title, AVG(review.stars) as average_stars
from meal JOIN review on meal.id = review.meal_id GROUP BY  meal.id,meal.title
ORDER BY average_stars DESC ;
