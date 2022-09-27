const inquirer = require("inquirer");
const queries = require("./queries");
require("console.table");

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
          "view employees by department",
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
        case "view employees by department":
          viewEmployeeByDept();
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
        case "remove employee":
          removeEmployee();
          break;
        case "exit the app":
          exitApp();
      }
    });
};

function viewEmployees() {
  queries.viewEmployees().then(([employees]) => {
    console.table(employees);
    startApp();
  });
}

function viewDepartments() {
  queries.viewDepartments().then(([departments]) => {
    console.table(departments);
    startApp();
  });
}

function viewAllRoles() {
  queries.viewAllRoles().then(([roles]) => {
    console.table(roles);
    startApp();
  });
}

function viewEmployeeByDept() {
  queries.viewDepartments().then(([departments]) => {
    // console.table(departments);
    const departmentChoices = departments.map((department) => {
      return { name: department.department_name, value: department.id };
    });

    inquirer
      .prompt([
        {
          type: "list",
          name: "department_id",
          message: "Which department would you like to view employees for?",
          choices: departmentChoices,
        },
      ])
      .then((answer) => {
        queries
          .viewEmployeesByDept(answer.department_id)
          .then(([employees]) => {
            console.table(employees);
            startApp();
          });
      });
  });
}

const exitApp = () => {
  process.exit();
};
startApp();
