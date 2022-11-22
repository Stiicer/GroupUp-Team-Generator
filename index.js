const inquirer = require('inquirer');
const fs =  require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const team = [];
managerPrompt();
function managerPrompt(){
    
   return inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message:"What is your name?"
 
        },
        {
            type: "input",
            name: "Id",
            message:"What is your employee ID?"
 

        },
        {

            type: "input",
            name: "Email",
            message:"What is your email?"

        },
        {
            type: "input",
            name: "Special",
            message:"What is your office number?"

        },
    ])
    .then(answers => {
        let manager = new Manager(answers.Name,answers.Id,answers.Email,answers.Special);
        manager.special=answers.Special;
        team.push(manager);
        addmore();
    })


} 
function engineerPrompt(){
    return inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message:"What is your name?"
 
        },
        {
            type: "input",
            name: "Id",
            message:"What is your employee ID?"
 

        },
        {

            type: "input",
            name: "Email",
            message:"What is your email?"

        },
        {
            type: "input",
            name: "Special",
            message:"What is your github username"

        },
    ])
    .then(answers => {
        let engineer = new Engineer(answers.Name,answers.Id,answers.Email,answers.Special);
        engineer.special=answers.Special;
        team.push(engineer);
        addmore();
    })

}
function internPrompt(){
    return inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message:"What is your name?"
 
        },
        {
            type: "input",
            name: "Id",
            message:"What is your employee ID?"
 

        },
        {

            type: "input",
            name: "Email",
            message:"What is your email?"

        },
        {
            type: "input",
            name: "Special",
            message:"What is school did you go to?"

        },
    ])
    .then(answers => {
        let intern = new Intern(answers.Name,answers.Id,answers.Email,answers.Special);
        intern.special=answers.Special;
        team.push(intern);
        addmore();
    })

}
function addmore(){
    inquirer.prompt([
        {
            type: "list",
            name:"Added",
            message:"would you like to add more team members?",
            choices:["Intern","Engineer","Done"],

        }
    ])
    .then(answers=> {
        if(answers.Added==="Intern"){
            internPrompt();

        }else if(answers.Added==="Engineer"){
            engineerPrompt();

        }else{
            console.log(team);
            fs.writeFileSync("./dist/team.html",`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<header id="header">My Team</header>
            `)
            for (let i = 0; i < team.length; i++) {
                fs.appendFileSync("./dist/team.html",`
            
               <div id="name">${team[i].name}</div>
               <div class="card-box">
               <div id="tId"> ${team[i].id}</div>
               <div id="email">${team[i].email}</div>
               <div id="special">${team[i].special}</div>
               </div>
            
                `)
                   
            }
            fs.appendFileSync("./dist/team.html",`
            </body>
</html>
            `
            
            
            )
            }


    })
    



}

