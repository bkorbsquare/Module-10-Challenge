const inquirer = require ('inquirer');
const fs = require ('fs');
const generateTeam = require ('./src/page-template.js'); // yet to create this path

const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');

const newStaffMemberData = [];

const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
                default: 'Name',
            },
            {
                type: 'input',
                message: 'What is your ID Number?',
                name: 'ID',
                default: '0',
            }
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
                default: 'name@website.com',
            }
            {
                type: 'checkbox',
                message: 'What is your role?',
                name: 'role',
                choices: ['Engineer', 'Intern', 'Manager'],
            },
        ])

        if (answers.role === 'Manager') {
            const managerAns = await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your office number?',
                        name: 'officeNumber',
                        default: '0',
                    },
                ])
            const newManager = new Manager (
                answers.name,
                answers.id,
                answers.email, 
                managerAns.officeNumber,
            );
            newStaffMemberData.push(newManager);

            
        }

}