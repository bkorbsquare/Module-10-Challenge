const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
const teamIds = [];

function createManager() {

    console.log("Who is the manager of this team?")

    inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is the team member's name?",
        default: "Name",
    },
    {
        type: "input",
        name: "id",
        message: "What is the team member's ID?",
        default: "Number",
    },
    {
        type: "input",
        name: "email",
        message: "What is the team member's email address?",
        default: "name@email.com",
    }, 
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        default: "Number",
    }])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager);
        teamIds.push(response.id)
        createTeamMember();
        // console.log(manager)
    })
    
}


function createTeamMember() {

    console.log("Let's add some members to the team!")

    inquirer
    .prompt(
        {
            type: "list",
            name: "role",
            message: "What is this team member's role?",
            choices: [
                "Engineer",
                "Intern",
                "I'm done adding team members"
            ]

        }
    ).then(response => {
        switch(response.role) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                renderHtml();
        };
    });
};

function createEngineer() {

    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team member's name?",
            default: "Name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team member's ID?",
            default: "Number",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team member's email address?",
            default: "name@email.com",
        }, 
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            default: "github.com/name",
        }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        createTeamMember();
    })

}

function createIntern() {

    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team member's name?",
            default: "Name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team member's ID?",
            default: "Number",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team member's email address?",
            default: "name@email.com",
        }, 
        {
            type: "input",
            name: "school",
            message: "What is the team member's school?",
            default: "School",
        }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        createTeamMember();
    });

};

function renderHtml() {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }

    fs.writeFile(outputPath, render(team), (err) => {
        if (err) throw err

        });

};

createManager();
