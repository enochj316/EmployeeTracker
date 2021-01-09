let inquirer = require('inquirer');
const mysql = require('mysql');
let addEmployee = (cli, connection) => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the employees first name?',
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the employees last name?',
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'What is the employees role ID',
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'What is the employees manager ID',
            },
        ])
        .then((answers) => {
            connection.query(
                `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ('${answers.first_name}','${answers.last_name}','${answers.role_id}','${answers.manager_id}')`,
                (err, res) => {
                    if (err) throw err;
                }
            );
            cli();
        });
};
module.exports = addEmployee;