const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

console.log( logo({ name: "Employee Manager" }).render() );
main();

async function main() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View All Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]);

  switch (choice) {
    case "VIEW_EMPLOYEES":
      console.table(await db.getEmployees());
      return main();

    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      const departments = await db.getDepartments();

      const list = departments.map(({ id, name}) => ({
        name: name,
        value: id
      }));

      const { id } = await prompt([
        {
          type: "list",
          name: "id",
          message: "Pick a Department?",
          choices: list
        }
      ]);

      const employees = await db.getDepartmentEmployees(id);

      console.table(employees);
      return main();

    case "REMOVE_EMPLOYEE":
      const Employees = await db.getEmployees();
      const List = Employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
      }));
      const { ID } = await prompt([
        {
          type: "list",
          name: "ID",
          message: "Who would you like to fire?",
          choices: List
        }
      ]);

      await db.deleteEmployee(ID);
      return main();

    default:
      return process.exit();
  }
}