const mysql = require('mysql');
const cTable = require('console.table');

const db_config = require("./connection");

// Queries than console logs employee info from the employee, department and role tables
let viewBudget = (cli) => {

    let connection = mysql.createConnection(db_config);

    function viewBudget() {
        return new Promise((resolve, reject) => {
            const query = `SELECT SUM(role.salary) AS 'Total Budget' FROM role, employee WHERE employee.role_id=role.id`;
            db.query(query, (err, results, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]['Total Budget']);
                }
            });
        });
    }
}

module.exports = viewBudget;
