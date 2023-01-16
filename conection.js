const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL ussername
        user: 'root',
        password: 'password1234',
        database: 'employees'
    },
    console.log('Connected to the employee_db database.')
);

module.exports = connection; 