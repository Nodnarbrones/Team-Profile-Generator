const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];


managerPrompt()
function managerPrompt(){
    inquirer.prompt([
        {
            type:'input',
            name:'ManagerName',
            message:'Please enter the Manager name'
        },
        {
            type:'input',
            name:'ManagerId',
            message:'Please enter the Manager ID'
        },
        {
            type:'input',
            name:'ManagerEmail',
            message:'Please enter the Manager Email'
        },
        {
            type:'input',
            name:'ManagerOfficeNumber',
            message:'Please enter the Manager office number'
        },
    ]) .then(data => {
        const manager = new Manager(data.ManagerName,data.ManagerId,data.ManagerEmail,data.ManagerOfficeNumber)
        teamMembers.push(manager)
        console.log(teamMembers);
        //add new team member function here
        NewMember()
    })
}

function engineerPrompt(){
    inquirer.prompt([
        {
            type:'input',
            name:'EngineerName',
            message:'Please enter the Engineer name'
        },
        {
            type:'input',
            name:'EngineerId',
            message:'Please enter the Engineer ID'
        },
        {
            type:'input',
            name:'EngineerEmail',
            message:'Please enter the Engineer Email'
        },
        {
            type:'input',
            name:'EngineerGithub',
            message:'Please enter the Engineer github'
        },
    ]) .then(data => {
        const engineer = new Engineer(data.EngineerName,data.EngineerId,data.EngineerEmail,data.EngineerGithub)
        teamMembers.push(engineer)
        console.log(teamMembers);
        //add new team member function here
        NewMember()
    })
}

function internPrompt(){
    inquirer.prompt([
        {
            type:'input',
            name:'InternName',
            message:'Please enter the Intern name'
        },
        {
            type:'input',
            name:'InternId',
            message:'Please enter the Intern ID'
        },
        {
            type:'input',
            name:'InternEmail',
            message:'Please enter the Intern Email'
        },
        {
            type:'input',
            name:'InternSchool',
            message:'Please enter the Intern school'
        },
    ]) .then(data => {
        const intern = new Intern(data.InternName,data.InternId,data.InternEmail,data.InternSchool)
        teamMembers.push(intern)
        console.log(teamMembers);
        //add new team member function here
        NewMember()
    })
}

function NewMember(){
    inquirer.prompt([
        {
        type:'list',
        name:'askQuestion',
        message:'What type of team member would you like to add',
        choices:['Manager','Engineer','Intern','No More Members']
    }
    ]) .then(data => {
        if(data.askQuestion === 'Manager'){
            managerPrompt()
        }
        else if(data.askQuestion === 'Engineer'){
            engineerPrompt()
        }
        else if(data.askQuestion === 'Intern'){
            internPrompt()
        }
        else{
            // add generate html function here
        }
    })
}