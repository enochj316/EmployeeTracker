let inquirer = require('inquirer');
const mysql = require('mysql');

let removeEmployee = (cli, connection) => {
    inquirer
        .prompt([
            inquirer.prompt([{
                type: "list",
                name: 'employeeName',
                message: 'Which employee do you wish to remove?',
                choices: employeeNames,
            }
            ])


                .then((answers) => {
                    // Finds selected employee to grab the employee id
                    function employeeSearch(employeeKey, myArray) {
                        for (var i = 0; i < myArray.length; i++) {
                            if (myArray[i].employee === employeeKey) {
                                return myArray[i];
                            }
                        }
                    }
                    let employeeId = employeeSearch(answers.employeeName, employeeInfo);

                    connection.query(`DELETE FROM employee WHERE id = ${employeeId.id} ;`,

                        (err, res) => {
                            if (err) throw err
                        });
                    connection.end();
                    cli();
                })}


// Queries than passes employee info
let getEmployees = (cli, connection) => {
    let employeeInfo = [];

    connection.query(`
  SELECT id, CONCAT(first_name, ' ',last_name) AS employee FROM employee;`,
        (err, res) => {
            res.forEach((employee) => {
                employeeInfo.push({
                    "id": employee.id,
                    "employee": employee.employee
                }
                );
            });
            connection.end();
            employeeInquiry(cli, employeeInfo);
        });
}


let removeEmployee = (cli, connection) => {
    getEmployees(cli);
    connection.end();
}

module.exports = removeEmployee;