---Meal sharing db schema
CREATE DATABASE mealsharingDb
    DEFAULT CHARACTER SET = 'utf8mb4';

    USE mealsharingDb;

   CREATE TABLE Meal (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    location VARCHAR(100) NOT NULL,
   `when` DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL NOT NULL,
    created_date DATE
);

  CREATE TABLE Reservation (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(100) NOT NULL,
    contact_name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100) NOT NULL,   
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

 CREATE TABLE Review (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    meal_id INT NOT NULL,
    stars INT NOT NULL,
    created_date DATE NOT NULL,   
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

INSERT INTO Meal (title, description, location, `when`, max_reservations, price, created_date) VALUES 
('Italian Pasta Night', 'Enjoy authentic Italian pasta dishes.', 'Copenhagen', '2025-05-10 18:00:00', 10, 25.00, '2025-04-20'),
('Vegan Brunch', 'Healthy and delicious plant-based brunch.', 'Aarhus', '2025-05-12 11:30:00', 8, 18.50, '2025-04-22'),
('BBQ Grill Feast', 'All-you-can-eat BBQ meat and sides.', 'Odense', '2025-05-15 17:00:00', 15, 30.00, '2025-04-25');
INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(2, 1, '2025-04-21', '+4512345678', 'Maria Jensen', 'maria@example.com'),
(4, 2, '2025-04-23', '+4598765432', 'Lars Hansen', 'lars@example.com'),
(3, 3, '2025-04-26', '+4523456789', 'Emma Sørensen', 'emma@example.com');

INSERT INTO Reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES
(2, 1, '2025-04-21', '+4512345678', 'Maria Jensen', 'maria@example.com'),
(4, 2, '2025-04-23', '+4598765432', 'Lars Hansen', 'lars@example.com'),
(3, 3, '2025-04-26', '+4523456789', 'Emma Sørensen', 'emma@example.com');

INSERT INTO Review (title, description, meal_id, stars, created_date)
VALUES
('Delicious pasta!', 'The food was amazing and the host was lovely.', 1, 5, '2025-05-11'),
('Fresh and tasty', 'Great options for vegans, really filling!', 2, 4, '2025-05-13'),
('Loved the ribs!', 'Perfect BBQ with juicy meats and great sides.', 3, 5, '2025-05-16');


