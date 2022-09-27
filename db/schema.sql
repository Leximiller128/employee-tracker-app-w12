-- database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

-- department table
CREATE TABLE department (
department_name VARCHAR(30) NOT NULL, 
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id)
);

-- employees table
CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(30) NOT NULL, 
last_name VARCHAR(30) NOT NULL, 
role_id VARCHAR(30) NOT NULL,
manager_id INT, 
PRIMARY KEY (id)
);

-- roles table
CREATE TABLE roles (
title VARCHAR(30) NOT NULL, 
id INT NOT NULL AUTO_INCREMENT,
department_id INT NOT NULL, 
salary DECIMAL NOT NULL, 
PRIMARY KEY (id)
);