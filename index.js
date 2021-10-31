const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

init() 

function init() {
    createManager();
}

function createManager() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Manager's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "officeNumber"
        }
    ])
    .then ((response) => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        team.push(manager);
        teamMenu();
    })
}

function createEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub username?",
            name: "github"
        }
    ])
    .then ((response) => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github)
        team.push(engineer);
        teamMenu();
    })
}

function createIntern() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Intern's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Where does the Intern go to school?",
            name: "school"
        }
    ])
    .then ((response) => {
        let intern = new Intern(response.name, response.id, response.email, response.school)
        team.push(intern);
        teamMenu();
    })
}

function teamMenu() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'next',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish']
        }
    ])
    .then ((response) => {
        switch (response.next) {
            case 'Add an Engineer':
                createEngineer()
                break;
            case 'Add an Intern':
                createIntern()
                break;
            case 'Finish':
                buildTeam(team)
                break;
        }
    })
}

function buildTeam(team) {
    console.log(team)
    //render the team to a file
    let fileName = "sample.html";
    fs.writeFile(fileName, team, (err) => err ? console.log(err) : console.log('HTML file sucessfully written'));
}