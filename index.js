const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'management_db'
  })
  
function selection(){
inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'selector',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department','Add a role','Add an employee','Update an employee role','Quit'],
    },
  ])
  .then(answers => {
    switch (answers.selector){
        case 'View all departments':
          viewDep()
            break;
        case 'View all roles':
          viewRol()  
            break;
        case 'View all employees':
          viewEmp()  
            break;
        case 'Add a department':
          addDep();  
            break;
        case 'Add a role':
          addRole();
            
            break;
        case 'Add an employee':
          addEmployee();
            break;
        case 'Update an employee role':
            
            break;
        case 'Quit':

            console.log("All Done!")
            
            break;
    }
});
}


function viewDep(){
  db.query("SELECT * FROM department",(err,data)=>
  {
    if(err){
      throw(err)
    }
    console.table(data)
    selection()
  })
}
function viewRol(){
  db.query("SELECT * FROM role",(err,data)=>
  {
    if(err){
      throw(err)
    }
    console.table(data)
    selection()
  })
}
function viewEmp(){
  db.query("SELECT * FROM employee",(err,data)=>
  {
    if(err){
      throw(err)
    }
    console.table(data)
    selection()
  })
}
function addDep(){

  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the new department?',
      name: 'name',
    },
  ]).then((answers) => {

    db.query(`INSERT INTO department (name) VALUES ("${answers.name}")`,(err,data)=>
  {
    if(err){
      throw(err)
    }
    console.log(`New department "${answers.name}" added.`)

    selection()
    })
  })
}
function addRole(){

  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the new role?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the salary of the new role?',
      name: 'salary',
    },
    {
      type: 'input',
      message: 'What is the department_id of the new role?',
      name: 'department_id',
    },
  ]).then((answers) => {

    db.query(`INSERT INTO role (title,salary,department_id) VALUES ("${answers.title}",${answers.salary},${answers.department_id})`,(err,data)=>
  {
    if(err){
      throw(err)
    }
    console.log(`New role "${answers.title}" added.`)

    selection()
    })
  })
}



function addEmployee(){

  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the first name of the new employee?',
      name: 'first_name',
    },
    {
      type: 'input',
      message: 'What is the last name of the new employee?',
      name: 'last_name',
    },
    {
      type: 'input',
      message: 'What is the role_id of the new employee?',
      name: 'role_id',
    },
    {
      type: 'input',
      message: 'What is the manager_id of the new employee?',
      name: 'manager_id',
    },
  ]).then((answers) => {

    db.query(`INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("${answers.first_name}","${answers.last_name}",${answers.role_id},${answers.manager_id})`,(err,data)=>
  {
    if(err){
      throw(err)
    }
    console.log(`New employee ${answers.first_name} ${answers.last_name} added.`)

    selection()
    })
  })
}


selection();