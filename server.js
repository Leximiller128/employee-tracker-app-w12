const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");

// create the connection
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "employeelist_db",
  },
  console.log(`Connected to the employeelist_db database.`)
);

// send 404 if req not met
app.use((req, res) => {
  res.status(404).end();
});
