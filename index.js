const inquirer = require ('inquirer');
const fs = require ('fs');
const generateTeam = require ('./templates');

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
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
                default: 'name@website.com',
            },
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

        } else if (answers.role === 'Engineer') {
            const githubAns = await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your Github Username?',
                        name: 'github',
                        default: 'github.com/name',
                    }
                ])
            const newEngineer = new Engineer (
                answers.name,
                answers.id, 
                answers.email, 
                githubAns.github,
            );
            newStaffMemberData.push(newEngineer);

        } else if (answers.role === 'Intern') {
            const internAns = await inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What university did you attend?',
                        name: 'school',
                        default: 'school',
                    }
                ])
            const newIntern = new Intern (
                answers.name,
                answers.id, 
                answers.email, 
                internAns.school,
            );
            newStaffMemberData.push(newIntern);
        }

    }; 

    async function promptQuestions() {
        await questions()

        const addMemberAns = await inquirer
            .prompt([
                {
                    name: 'addMember',
                    type: 'list',
                    choices: ['Add a new member', 'Create team'],
                    message: 'What would you like to do next?',
                },
            ])

            if (addMemberAns.addMember === 'Add a new member') {
                return promptQuestions()
            }
            return createTeam();
    }
 
    
        promptQuestions();

        function createTeam () {
            console.log ('new staff', newStaffMemberData)
            fs.writeFileSync(
                './output/index.html',
                generateTeam(newStaffMemberData),
                'utf-8'
            );
        }
