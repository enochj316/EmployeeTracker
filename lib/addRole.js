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



let roleInquiry = (cli, roles, connection) => {

    inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the role you wish to add?",
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
    },
    {
        type: "list",
        name: "role_department",
        message: "What department does the role belong too?",
        choices: roles,
    }])
        .then((answers) => {

            //Returns the roleid that matches the role selected
            function roleSearch(roleKey, myArray) {
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i].name === roleKey) {
                        return myArray[i];
                    }
                }
            }
            let rolesId = roleSearch(answers.role_department, roles);


            connection.query(`INSERT INTO role (title, salary, department_id ) VALUES ('${answers.title}', ${parseInt(answers.salary)}, ${parseInt(rolesId.department_id)} )`,
                (err, res) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                });

            connection.end();
            cli();

        });
}

// Make mysql call to grab department information

let getDepartments = (cli, connection) => {



    connection.query(`
    SELECT DISTINCT department.id as department_id, name FROM role
    RIGHT JOIN department on role.department_id = department.id;`,

        (err, res) => {
            if (err) {
                console.log(err)
                return
            }
            var role = []
            res.forEach((roles) => {
                role.push({
                    "department_id": role.id,
                    "name": role.name
                }
                );
            });

            roleInquiry(cli, connection, role);
        });
}

let addRole = (cli, connection) => {
    getDepartments(cli, connection);
}

module.exports = addRole;