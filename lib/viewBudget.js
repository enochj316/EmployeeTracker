
const cTable = require('console.table');


// Queries than console logs employee info from the employee, department and role tables
let viewBudget = (cli, connection) => {

    return new Promise((resolve, reject) => {
        const query = `SELECT SUM(role.salary) AS 'Total Budget' FROM employeetracker_db.role;`;
        connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                console.log(results[0]['Total Budget'])
                resolve(results[0]['Total Budget']);
            }
        });
    });
}


module.exports = viewBudget;
