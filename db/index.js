const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    getEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager " +
            "FROM employee " +
            "LEFT JOIN role on employee.role_id = role.id " +
            "LEFT JOIN department on role.department_id = department.id " +
            "LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    getDepartments() {
        return this.connection.query(
            "SELECT department.id, department.name " + 
            "FROM employee " + 
            "LEFT JOIN role on employee.role_id = role.id " + 
            "LEFT JOIN department on role.department_id = department.id " + 
            "GROUP BY department.id, department.name;"
        );
    }

    getDepartmentEmployees(id) {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name " + 
            "FROM employee " + 
            "LEFT JOIN role on employee.role_id = role.id " + 
            "LEFT JOIN department department on role.department_id = department.id " + 
            "WHERE department.id = ?;",
            id
          );
    }

    deleteEmployee(id) {
        return this.connection.query("DELETE FROM employee WHERE id = ?", id);
    }



}

module.exports = new DB(connection);
