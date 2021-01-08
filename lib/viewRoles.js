const cTable = require('console.table');


// Queries than console logs employee info from the employee, department and role tables
let viewRoles = (cli, connection) => {

    connection.query(`
  SELECT id, title, salary, department_id FROM role;`
        ,
        (err, res) => {
            if (err) {
                console.log(err)
                return
            }
            let roleTable = [];
            res.forEach((role) => {
                roleTable.push(
                    {
                        'id': role.id,
                        'title': role.title,
                        'salary': role.salary,
                        'last_name': role.last_name,
                        'department_id': role.department_id,
                    });
            });

            console.table(
                roleTable
            );

            cli();
        });

}

module.exports = viewRoles;