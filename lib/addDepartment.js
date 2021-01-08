let inquirer = require("inquirer");
const mysql = require('mysql');


// Conect to employee_db database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Gen2612$$',
    database: 'employee_db',
    multipleStatements: true
});

// Use text input from inquirer to add new department using mysql 
let addDepartment = (cli, connection) => {

    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department you wish to add?",
    }])
        .then((answers) => {

            connection.query(`INSERT INTO department (name) VALUES ('${answers.department}')`, (err, res) => {
                if (err) throw err
            });


            cli();
            connection.end();
        });
}

module.exports = addDepartment;