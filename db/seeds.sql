INSERT INTO department (department_name)
VALUES 
('Sales'),
('Engineering'),
('Finance'), 
('Legal'), 
('Marketing'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Sales Lead', 100000, 1), 
('Account Manager', 80000, 1), 
('SDR', 60000, 1), 

('Lead Engineer', 150000, 2),
('Software Engineer', 130000, 2), 
('Jr Developer', 100000, 2), 

('Lead Accountant', 100000, 3), 
('Accounts Receivable', 80000, 3), 
('Accounts Payable', 80000, 3), 

('Lead Attorney', 150000, 4), 
('Attorney', 130000, 4), 

('Lead Marketer', 100000, 5), 
('Marketing Assistant', 60000, 5),

('HR Representative', 100000, 6), 
('Executive Assisntant', 60000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 5, NULL), 
('Susan', 'Watts', 11, NULL), 
('Terri', 'Moore', 14, NULL), 
('Kelly', 'Belly', 2, NULL), 
('Joe', 'Shmo', 6, NULL), 
('Sam', 'Brown', 3, 1), 
('Sally', 'Truett', 1, 3), 
('Keri', 'Leverly', 8, 3), 
('Anna', 'Bowman', 7, 1);