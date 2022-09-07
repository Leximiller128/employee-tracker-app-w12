DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
department_name INT NOT NULL, 
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id)
);

CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT, 
first_name VARCHAR(30) INT NOT NULL, 
last_name VARCHAR(30) INT NOT NULL, 
role_id VARCHAR(30) INT NOT NULL
manager_id INT NOT NULL, 
PRIMARY KEY (id)
);

CREATE TABLE roles (
title VARCHAR(30) INT NOT NULL, 
id INT NOT NULL AUTO_INCREMENT,
department_id INT NOT NULL, 
salary DECIMAL NOT NULL, 
PRIMARY KEY (id)
);