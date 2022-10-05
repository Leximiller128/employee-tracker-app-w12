const connection = require("./db/connection");

class Queries {
  constructor(connection) {
    this.connection = connection;
  }

  viewDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  viewAllRoles() {
    return this.connection.promise().query("SELECT * FROM roles");
  }

  viewEmployees() {
    return this.connection.promise().query("SELECT * FROM employees");
  }

  viewEmployeesByDept(departmentId) {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id WHERE department.id = ?",
        departmentId
      );
  }
  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  addRole(roles) {
    return this.connection.promise().query("INSERT INTO roles SET ?", roles);
  }
  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = role.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }
  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
}

module.exports = new Queries(connection);
