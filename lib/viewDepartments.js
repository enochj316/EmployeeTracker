const cTable = require('console.table');


// Queries than console logs employee info from the employee, department and role tables
let viewDepartments = (cli, connection) => {


    connection.query(`
  SELECT id, name FROM department`
        ,
        (err, res) => {
            let departmentTable = [];
            res.forEach((department) => {
                departmentTable.push(
                    {
                        'id': department.id,
                        'name': department.name,
                    });
            });

            console.table(
                departmentTable
            );

            cli();
        });

}

module.exports = viewDepartments;