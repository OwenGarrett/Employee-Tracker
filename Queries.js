const connection = require("./dbconnection")



class Queries {
    constructor(connection){
        this.connection = connection 
    }

    viewDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department")
    }
}

module.exports = new Queries(connection)