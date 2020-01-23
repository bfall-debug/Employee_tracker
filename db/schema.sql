DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department(name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

CREATE TABLE  role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(12,2),
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

INSERT INTO role(title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
  ('Ashley', 'Rodriguez', 3, NULL),
  ('Malia', 'Brown', 5, NULL),
  ('Sarah', 'Lourd', 6, NULL),
  ('John', 'Doe', 1, 1),
  ('Mike', 'Chan', 2, 4),
  ('Christian', 'Eckenrode', 3, 5),
  ('Kevin', 'Tupik', 4, 1),
  ('Tom', 'Allen', 7, 3);
  