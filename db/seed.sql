INSERT INTO department (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title,salary,department_id) VALUES 
("Sales Lead",100000,1),
("Software Engineer",150000,2),
("Financial Analyst", 120000,3),
("Attorney", 180000,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES 
("John","Doe",3,NULL),
("Joe","Reh",2,1),
("Louis", "Cole",2,2),
("Brett", "Bel",1,2);

