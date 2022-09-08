const mysql = require("mysql2");
const inquirer = require("inquirer");
const { listenerCount, allowedNodeEnvironmentFlags } = require("process");
require("console.table");

// create the connection
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "employee_db",
  },
  console.log(`Connected to the employeelist_db database.`)
);

// mysql.query((err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

//ask the user to view all departments, roles or employees

const startApp = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add department",
          "add role",
          "add employee",
          "exit the app",
        ],
      },
    ])
    .then((answer) => {
      let option = answer.options;
      switch (option.toLowerCase()) {
        case "view all departments":
          viewDepartments();
          break;
        case "view all employees":
          viewEmployees();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "add department":
          addDepartment();
          break;
        case "add role":
          addrole();
          break;
        case "add employee":
          addEmployee();
          break;
        case "exit the app":
          exitApp();
      }
    });
};

const exitApp = () => {
  process.exit();
};
startApp();
