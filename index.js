// initialized my npm's and linked my other files
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./team/engineer');
const Intern = require('./team/intern');
const Manager = require('./team/manager');

let employeeID = 000;
let employeeArray = [];

// started by creating the prompts needed via the inquirer npm
function managerPrompt(){
    // using inquirer npm to create prompts 
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the manager's name: ",
            name: "managerName"
        },
        {
            type: "input",
            message: "Please enter the manager's email: ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your office number?: ",
            name: "officeNumber"
        }
    ]).then(res => {
        // linking the responses to a variable
        let managerName = res.managerName;
        let managerEmail = res.managerEmail;
        let officeNumber = res.officeNumber;
        // creating new operator
        let manager = new Manager (managerName, managerEmail, officeNumber, employeeID);
        // pushing the manager info into an empty array where all employees will go
        employeeArray.push(manager);
        // +1 for employee id
        employeeID++;
        // calling next prompt function
        employeePrompt();
    });
};
// next prompt