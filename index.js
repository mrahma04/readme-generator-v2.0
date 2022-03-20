// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

const initialPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description:'   
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'Enter installation instructions:'   
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter contribution guidelines:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT License', 'GPL']
        }
    ])

    console.log(answers)
}

initialPrompt()

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions