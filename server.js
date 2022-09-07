const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");

// create the connection
const connection = mysql.createConnection(
  //creates connection
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "employeelist_db",
  },
  console.log(`Connected to the employeelist_db database.`)
);

app.use((req, res) => {
  res.status(404).end();
});
