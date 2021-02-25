// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of this project',
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Table of Contents: What is the table of contents of this project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation: Explain how a user would install what is neccesary for this project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: What are the project instructions and examples?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'License: what is the license for this project?',
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Contributing: How can users contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests: How do you test this project?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Questions: What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions: What is your email address?',
        }];


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(fileName, data, err =>{
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md has been created")
    });

    //not finished, add path.join (something with path)


 
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
   .then((data) => {
    
            writeToFile('README.md', generateMarkdown(data))
            console.log('Success')
    
            })
        }
// Function call to initialize app
init();
