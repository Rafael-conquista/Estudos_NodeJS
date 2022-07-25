import inquirer from 'inquirer';
import chalk from 'chalk';
 
inquirer
    .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota?',
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?',
        },
    ])
    .then((answers) => {
        // const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
        const nota1 = parseInt(answers.p1)
        const nota2 = parseInt(answers.p2)
        const media = ((nota1 + nota2) / 2)
        
        if(media >= 7){
            console.log(`Primeira nota: ${nota1}`)
            console.log(`Segunda nota: ${nota2}`)
            console.log(chalk.bgGreenBright(`Aprovado! Sua média é: ${media}`))
        }
        else{
            console.log(`Primeira nota: ${nota1}`)
            console.log(`Segunda nota: ${nota2}`)
            console.log(chalk.bgRedBright(`Reprovado! Sua média é: ${media}`))
        }
        // console.log(answers)
    })
    .catch(err => console.log(err))