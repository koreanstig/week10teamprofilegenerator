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
        // +1 for employee id
        employeeID++;
        // pushing the manager info into an empty array where all employees will go
        employeeArray.push(manager);
        // calling next prompt function
        employeePrompt();
    });
};
// next prompt
function employeePrompt(){
    inquirer.prompt([
        // these are the questions that the engineer and intern have in common
        {
            type: "list",
            message: "Is the employee an Engineer or Intern?",
            choices: ["Engineer", "Intern"],
            name: "employeeType"
        },
        {
            type: "input",
            message: "What is the employee's name?: ",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is the employee's email?: ",
            name: "employeeEmail"
        },
    ]).then(res => {
        let employeeType = res.employeeType;
        let employeeName = res.employeeName;
        let employeeEmail = res.employeeEmail;
        // now check to see if engineer or intern and do position specific questions
        if (employeeType === "Engineer"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the Engineer's GitHub username?: ",
                    name: "engineerGithub"
                },
                {
                    type: "list",
                    message: "Would you like to add another employee?: ",
                    choices: ["Yes", "No"],
                    name: "anotherEmployee"
                }
            ]).then (res => {
                let engineerGithub = res.engineerGithub;
                let anotherEmployee = res.anotherEmployee;
                let engineer = new Engineer(employeeName, employeeID, employeeEmail, engineerGithub);
                employeeID++;
                employeeArray.push(engineer);

                if(anotherEmployee === "Yes"){
                    employeePrompt();
                } else {
                    createPage();
                    return;
                }
            });
        } else {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Where did the Intern go to school?: ",
                    name: "internSchool"
                },
                {
                    type: "list",
                    message: "Would you like to add another employee?: ",
                    choices: ["Yes", "No"],
                    name: "anotherEmployee"
                }
            ]).then(res => {
                let internSchool = res.internSchool;
                let anotherEmployee = res.anotherEmployee;
                let intern = new Intern(employeeName, employeeID, employeeEmail, internSchool);
                employeeID++;
                employeeArray.push(intern);

                if (anotherEmployee === "Yes"){
                    employeePrompt();
                } else {
                    createPage();
                    return;
                };
            });
        };
    });
};