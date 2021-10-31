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
                buildTeam()
                break;
        }
    })
}

function buildTeam() {
    console.log(team)
    //render the team to a file
}