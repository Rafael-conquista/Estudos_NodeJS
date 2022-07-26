const http = require("http")
cponst 

const port = 3003

const server = http.createServer((req,res) => {
    const urlInfo =require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')

    if(!name){
        res.end('<h1>Preencha o seu nome: </h1><form method="GET"><input type="text" name = "name"></imput><input type="submit" value="Enviar></input></form>')
    } else{
        res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }
})

server.listen(port,() => {
    console.log(`Servidor Rodando a porta ${port}`)
})