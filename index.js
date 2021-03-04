// initialized my npm's
const inquirer = require('inquirer');
const fs = require('fs');
// started by creating the prompts needed via the inquirer npm
inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What will your project be used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Academic",
            "Apache",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who has contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do I test your project?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have any questions? "
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? "
    },
    {
        type: "input",
        name: "email",
        message: "What is your email? "
    }
]).then(function (answers) { //using the answers from the prompt and temperate literals, I created the code for the readme.md file 
    const readMe = `
<h1 align="center">${answers.title}</h1>
    
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
Licenced by ${answers.license}. 

## Contributors
${answers.contributors}

## Tests
${answers.tests}

## Questions
${answers.questions}<br />
<br />
My Github: [${answers.username}](https://github.com/${answers.username})
<br />
My email: ${answers.email}<br /><br />
This README generator was created by https://github.com/koreanstig!<br />
Check out the code - https://github.com/koreanstig/week9readmegenerator!
`
    fs.writeFile('newreadme.md', readMe, (err) => { //launched a writefile to create the new readme file
        if (err) {
            throw err;
        }
    });
});