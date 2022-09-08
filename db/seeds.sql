INSERT INTO department (department_name, id)
VALUES 
('Sales', 1),
('Engineering', 2),
('Finance', 3), 
('Legal', 4), 
('Marketing', 5)
('Human Resources', 6);

INSERT INTO roles (title, salary, id)
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
('John', 'Doe', 5, 0), 
('Susan', 'Watts', ), 
('Terri', 'Moore', ), 
('Kelly', 'Belly', ), 
('Joe', 'Shmo', ), 
('Sam', 'Brown', ), 
('Sally', 'Truett', ), 
('Keri', 'Leverly', ), 
('Anna', 'Bowman', );