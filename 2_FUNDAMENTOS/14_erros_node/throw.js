const x = 10

// checar se x é um número

if(!Number.isInteger(x)){
    throw new Error("o valor de x deve ser um inteiro")
}

console.log("continuando o codigo")
