const mysql = require("mysql2");

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "employee_db",
  },
  console.log(`Connected to the employeelist_db database.`)
);
connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
