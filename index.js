// initialized my npm's
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./team/engineer');
const Intern = require('./team/intern');
const Manager = require('./team/manager');

let employeeID = 001;
let employeeArray = [];

// started by creating the prompts needed via the inquirer npm
