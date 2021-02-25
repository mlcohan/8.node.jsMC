// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
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
            name: 'table of contents',
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
            type: 'input',
            name: 'license',
            message: 'License: what is the license for this project?',
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
            name: 'questions',
            message: 'Questions: What is your gitHub profile link?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions: How can a user reach you with further questions?',
        },
    ]);

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    'This is you md file????'
}

// TODO: Create a function to initialize app
const init = () => {
    questions().then((data) => {
        try {
            const md = writeToFile(data);
            fs.writeFileSync('README.md', md);
            console.log('Success')
        } catch (error) {
            console.log(error);
        }
    })
}

// Function call to initialize app
init();
