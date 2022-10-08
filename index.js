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
          "remove employee",
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
          addRole();
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

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department_name",
        message: "Add department?",
      },
    ])
    .then((res) => {
      let department_name = res;
      queries
        .addDepartment(department_name)
        .then(() => console.log(`Added ${department_name.name} to the table`));
      startApp();
    });
}

function addRole() {
  queries.viewDepartments().then(([dept]) => {
    let departments = dept;
    const departmentChoices = departments.map(({ id, department_name }) => ({
      name: department_name,
      value: id,
    }));
    inquirer
      .prompt([
        {
          name: "title",
          message: "What is the name of the role?",
        },
        {
          name: "salary",
          message: "what is the salary of the role?",
        },
        {
          type: "list",
          name: "department_id",
          message: "Which department does the role belong to?",
          choices: departmentChoices,
        },
      ])
      .then((roles) => {
        queries
          .addRole(roles)
          .then(() => console.log("Added new role to the table"));
        startApp();
      });
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        name: "last_name",
        message: "What is the employee's last name?",
      },
    ])
    .then((res) => {
      let firstname = res.first_name;
      let lastname = res.last_name;

      queries.viewAllRoles().then(([rows]) => {
        let roles = rows;
        const roleChoices = roles.map(({ id, title }) => ({
          name: title,
          value: id,
        }));
        prompt({
          type: "list",
          name: "role_id",
          message: "What is the employee's role?",
          choices: roleChoices,
        });

        console.log(roleChoices);
        queries.findAllEmployees().then(([rows]) => {
          let employees = rows;
          const managerChoices = employees.map(
            ({ id, first_name, last_name }) => ({
              name: `${first_name} ${last_name}`,
              value: id,
            })
          );
          managerChoices.unshift({ name: "None", value: null });

          prompt([
            {
              type: "list",
              name: "manager_id",
              message: "Whos is the employee's manager?",
              choices: managerChoices,
            },
          ])
            .then((res) => {
              let employee = {
                manager_id: res.managerid,
                role_id: roleid,
                first_name: firstname,
                last_name: lastname,
              };
              queries.addEmployee(employee);
            })
            .then(() =>
              console.log(`Added ${firstname} ${lastname} to the database`)
            );
          startApp();
        });
      });
    });
}

function removeEmployee() {
  queries.findAllEmployees().then(([rows]) => {
    let employees = rows;
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "removeEmployee",
          message: "Which employee do you want to delete?",
          choices: employeeChoices,
        },
      ])
      .then((res) => {
        queries.removeEmployee(res.removeEmployee);
      })
      .then(() => {
        console.log("employee successfully removed!");
        //console log success message
        //call original prompt
        startApp();
      });
  });
}

const exitApp = () => {
  process.exit();
};
startApp();
