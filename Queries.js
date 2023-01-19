const connection = require("./dbconnection")



class Queries {
    constructor(connection){
        this.connection = connection 
    }

    viewDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department")
    }
     viewEmployees() {
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name FROM employee")
    }
    updateEmployeeRole(employeeId, roleId){
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        )
    }
}

module.exports = new Queries(connection)