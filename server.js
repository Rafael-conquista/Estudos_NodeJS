const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) =>{
    res.send('Hello world')
})

app.get('/contato', (req,res) =>{
    res.send('voce entrou na pagina de contatos')
})

app.post('/', (req,res) =>{
    console.log(req.body)
    res.send(req.body)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
    res.send(req.query)

})

app.listen(3000,() =>{
    console.log('Acessar http://localhost:3000 ')
    console.log('servidor rodando na porta' + 3000)
})