const express =  require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Seja Bem-vindo ao meu app!")
})

app.get("/sobre", function(req, res){
    res.send("Minha página sobre")
})

app.get("/blog", function(req, res){
    res.send("Minha página blog")
})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h1>olá "+ req.params.nome+"</h1>")
})

app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081")
})
