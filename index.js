const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

console.log( logo({ name: "Employee Manager" }).render() );
loadMainPrompts();

async function loadMainPrompts() {
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
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
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
      return viewEmployees();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return viewEmployeesByDepartment();
    case "ADD_EMPLOYEE":
      return addEmployee();
    case "REMOVE_EMPLOYEE":
      return removeEmployee();
    default:
      return quit();
  }
}

async function viewEmployees() {
  loadMainPrompts();
}

async function viewEmployeesByDepartment() {
  loadMainPrompts();
}

async function addEmployee() {
  loadMainPrompts();
}

async function removeEmployee() {
  loadMainPrompts();
}

async function quit() {
  process.exit();
}