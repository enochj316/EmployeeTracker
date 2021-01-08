INSERT INTO department
  (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Sales Lead', 76000 , 1),
  ('Salesperson', 50000 , 1),
  ('Lead Engineer', 107000, 2),
  ('Software Enginner', 81000, 2),
  ('Accountant', 120000, 3),
  ('Legal Team Lead', 160000, 4),
  ('Lawyer', 190000, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Joney', 'Jey', 1, NULL),
  ('Carol', 'Hood', 2, 1),
  ('Bernie', 'Sanders', 3, NULL),
  ('Mike', 'Tyson', 4, 3),
  ('Hansi', 'Prem', 5, NULL),
  ('Joy', 'Puvan', 6, NULL),
  ('Nikhi', 'Prem', 7, 6);