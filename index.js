// initialized my npm's and linked my other files
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

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

function createPage() {
    let employeeCards = "";

    employeeArray.forEach(employee => {
        let employeeCard = employee.newEmployeeCard();
        employeeCards += employeeCard;
    });

    let newHTML = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap link -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Employee Summary</title>
</head>

<body>
    <div class="container-fluid bg-danger text-center d-flex align-items-center justify-content-center" style="height: 10rem;">
        <div>
            <h1 style="color: white;">My Team</h1>
        </div>
    </div>

    <div class="container" style="padding-top: 5rem;">
        <div class="card-columns justify-content-center">
            ${employeeCards}
        </div>
    </div>
</body>

</html>`;
    fs.writeFile("./dist/index.html", newHTML, (err)=> {
        if (err) {
            throw err;
        }
    });
};

managerPrompt();