

------------------School Database:-------------------------
--Create a new database containing the following tables:
--Class: with the columns: id, name, begins (date), ends (date)
--Student: with the columns: id, name, email, phone, class_id (foreign key)
--If you are done with the above tasks, you can continue with these advanced tasks:
--Create an index on the name column of the student table.
--Add a new column to the class table named status which can only have the --following values: not-started, ongoing, finished (hint: enumerations).

CREATE DATABASE SCHOOL;
USE SCHOOL;
CREATE TABLE class(
  id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  begins DATE,
  ends DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE student (
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  class_id INT,
  FOREIGN KEY (class_id) REFERENCES class(id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_student_name ON student (name);

ALTER TABLE class ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') DEFAULT 'not-started';

