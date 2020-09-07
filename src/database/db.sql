-- to create a new database
CREATE DATABASE budgetmanager;

-- to use database
use budgetmanager;

-- creating a new table
CREATE TABLE operation (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  concept VARCHAR(50) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  date DATE,
  type VARCHAR(8)
);

-- to show all tables
show tables;

-- to describe table
describe operation;