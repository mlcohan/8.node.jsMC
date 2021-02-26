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
            choices: ['apache2.0', 'artistic2.0', 'bsl1.0', 'cc', 'cc01.0', 'wtfpl', 'ecl2.0', 'epl1.0', 'epl2.0', 'eupl1.1', 'agpl3.0', 'gpl', 'gpl2.0', 'gpl3.0', 'lgpl', 'lgpl2.1', 'lgpl3.0', 'isc', 'lppl1.3c', 'ncsa', 'unlicense', 'zlib']
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
    
            writeToFile('newREADME.md', generateMarkdown(data))
            console.log('Success')
    
            })
        }
// Function call to initialize app
init();
