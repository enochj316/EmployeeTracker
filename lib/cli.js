const inquirer = require('inquirer');
const db_config = require("./connection");
const mysql = require('mysql');
const banner = require("./banner.js")


const viewEmployees = require("./viewEmployees.js");
const viewDepartments = require("./viewDepartments.js");
const viewRoles = require("./viewRoles.js");
const viewEmployeesByDepartment = require("./viewEmployeesByDepartment.js");
const viewEmployeesByManager = require("./viewEmployeesByManager.js");
const addEmployee = require("./addEmployee.js");
const addDepartment = require("./addDepartment.js");
const addRole = require("./addRole.js");
const removeEmployee = require("./removeEmployee.js");
const updateEmployeeRole = require("./updateEmployeeRole.js");
const viewBudget = require("./viewBudget.js");

//Brain of the application Handles all application calls

let connection = mysql.createConnection(db_config.db_config);
let count = 0;

let cli = async () => {
    if (count === 0) {
        await banner.displayBanner()
    }
    count++
    inquirer.prompt({
        name: "employeesOptions",
        type: "list",
        message: "What would you like to do?",
        choices: ["Exit", "View All Employees", "View All Employees By Department", "View All Employees By Manager", "View All Departments", "View All Roles",
            "Add Department", "Add Role", "Add Employee", "Remove Employee", "Update Employee Role", "View Budget"],
    }).then((answer) => {
        if (answer.employeesOptions == "Exit") {
            return process.exit(22);
        } else if (answer.employeesOptions == "View All Employees") {
            viewEmployees(cli, connection);
        } else if (answer.employeesOptions == "View All Employees By Department") {
            viewEmployeesByDepartment(cli, connection);
        } else if (answer.employeesOptions == "View All Employees By Manager") {
            viewEmployeesByManager(cli, connection);
        } else if (answer.employeesOptions == "View All Departments") {
            viewDepartments(cli, connection);
        } else if (answer.employeesOptions == "View All Roles") {
            viewRoles(cli, connection);
        } else if (answer.employeesOptions == "Add Department") {
            addDepartment(cli, connection);
        } else if (answer.employeesOptions == "Add Role") {
            addRole(cli, connection);
        } else if (answer.employeesOptions == "Add Employee") {
            addEmployee(cli, connection);
        } else if (answer.employeesOptions == "Remove Employee") {
            removeEmployee(cli, connection);
        } else if (answer.employeesOptions == "Update Employee Role") {
            updateEmployeeRole(cli, connection);
        } else if (answer.employeesOptions == "View Budget") {
            viewBudget(cli, connection).then(() => {
                cli();
            });
        }
    });
}

module.exports = cli;