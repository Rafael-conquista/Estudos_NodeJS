const fs = require("fs")

console.log("inicio")

fs.writeFileSync("Arquivo.txt", "oi")

console.log("fim")