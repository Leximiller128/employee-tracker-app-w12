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
}

module.exports = new Queries(connection);
