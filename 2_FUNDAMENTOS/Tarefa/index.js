const chalk = require("chalk")
const inquirer = require("inquirer")

inquirer.prompt([
        {
            name: 'p1',
            message: 'Qual o se nome?',
        },
        {
            name: 'p2',
            message: 'Qual a sua idade?',
        },
    ])
    .then((answers) => {
        const nome = parseInt(answers.p1)
        const idade = parseInt(answers.p2)
        
        console.log(chalk.bgYellow.black(`Nome: ${nome}, idade: ${idade}`))
    })
    .catch(err => console.log(err))