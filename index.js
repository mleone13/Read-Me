// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
const generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license are you using?",
        choices: ["MIT", "Apache 2.0", "BSD 3.0"]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => console.log (answers))
}

// Function call to initialize app
init();
