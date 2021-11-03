const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require('./utils/generateHTML')

//Empty array to push team member objects to
let team = [];

//Starts running the app
init() 

//First function is to create manager
function init() {
    createManager();
}

//Questions for manager
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
    //Use the manager class to create a new manager object
    .then ((response) => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        //Push the manager to the team array
        team.push(manager);
        //Ask what the user wants to do next
        teamMenu();
    })
}

// Questions for Engineer
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
    //Create engineer object
    .then ((response) => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github)
        //Push to team array
        team.push(engineer);
        //Ask what the user wants to do next
        teamMenu();
    })
}

//Questions for Intern
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
    //Creates new Intern object with the inputs
    .then ((response) => {
        let intern = new Intern(response.name, response.id, response.email, response.school)
        //Push to team array
        team.push(intern);
        //Ask what the user wants to do next
        teamMenu();
    })
}

// Question function for next step
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
            //If user chooses this
            case 'Add an Engineer':
                //Create another Engineer
                createEngineer()
                break;
            //If user chooses this
            case 'Add an Intern':
                //Create another Intern
                createIntern()
                break;
            //Otherwise stop questions and render page
            case 'Finish':
                let data = generateHTML(team);
                buildTeam(data);
                break;
        }
    })
}

function buildTeam(data) {
    //Writes a HTML file for the team profile
    fs.writeFile("./dist/team.html", data, (err) => err ? console.log(err) : console.log('HTML file sucessfully written'));
}