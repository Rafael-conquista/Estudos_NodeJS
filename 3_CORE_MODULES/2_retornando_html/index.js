const http = require("http")

const port = 3003

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end(
        '<h1>Olá esse é meu primeiro server com html</h1><p>testando atualização</p>'
    )
})

server.listen(port,() => {
    console.log(`Servidor Rodando a porta ${port}`)
})