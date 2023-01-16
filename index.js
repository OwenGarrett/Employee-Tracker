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
        ],
      },
    ])
    .then(choice =>{
        let answer = choice.action

        switch (answer){
            case "VIEW_DEPARTMENTS":
                viewDepartments()
            break; 
            case "ADD_DEPARTMENT":
                addDepartment()
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