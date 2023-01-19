// const express = require("express");
// import and require mysql 2
const { prompt }= require('inquirer');
// const { inherits } = require("util");

const console = require("console.table")
require("./Queries")



init()
// Connect to database

function init() {

    loadInitialQuestions()

}

function loadInitialQuestions() {
    prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          {
            name: "View all Departments",
            value: "VIEW_DEPARTMENTS",
          },
          {
            name: "Add a Department",
            value: "ADD_DEPARTMENT",
          },
          {
            name: "Update Employee Role",
            value: "UPDATE_EMPLOYEE_ROLE",
          },
        ],
      },
    ])
    .then(choice =>{
        let answer = choice.action

        switch (answer){
            case "VIEW_DEPARTMENTS":
                viewDepartments();
            break; 
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
                case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;

            default: 
            break;
        }
    })
}

function viewDepartments(){
    queries.viewDepartments()
    .then(([rows,fields]) => {
        console.table(rows)
    })
    .then(() => {
        loadInitialQuestions()
    });
}

function updateEmployeeRole(){
  queries.viewEmployees().then(([employees]) => {
    const employeeArray = employees.map(({id, first_name, last_name}) => {
      return ({
        name: `${first_name} ${last_name}`,
        value: id 
      })
    })
        prompt([
          {
            type: "list",
            name: "employeeId",
            message: "Which employees role would you like to update?",
            choices: employeeArray
        }
      ])
      .then(({employeeId}) => {
        
      })
    
  })
}