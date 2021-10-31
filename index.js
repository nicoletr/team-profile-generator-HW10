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
            type: 'input',
            message: 'What is their name?',
            name: 'name'
        }
    ])
    .then ((response) => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        team.push(manager);
        teamMenu();
    })
}

function createEngineer() {

}

function createIntern() {

}

function teamMenu() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'next',
            choices: ['Create Engineer', 'Create Intern', 'Finished']
        }
    ])
    .then ((response) => {
        switch (response.next) {
            case 'Create Engineer':
                createEngineer()
                break;
            case 'Create Intern':
                createIntern()
                break;
            case 'Finished':
                buildTeam()
                break;
        }
    })
}

function buildTeam() {
    console.log(team)
    //render the team to a file
}