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
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.department_name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employees manager on manager.id = employees.manager_id;"
      );
  }
  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employees SET ?", employee);
  }
  removeEmployee(id) {
    return this.connection
      .promise()
      .query("DELETE FROM employees WHERE id=?", id);
  }
}

module.exports = new Queries(connection);
