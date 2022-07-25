const chalk = require("chalk")

const nota = 4

if(nota >= 7 ){
    console.log(chalk.green.bold("Parabéns"))
}else{
    console.log(chalk.bgRed.black("recuperação"))
}


