const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', exphbs.engine)
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {

    const user = {
        name: "Rafael",
        surname: 'Conquista',
        age: 20,
    }

    const auth = false

    const approved = false

    res.render('home', { user: user, auth: true, approved })
})

app.get("/dashboard", function(req,res){

    const items = ["item a", "item b", "item c"]

    res.render("dashboard", {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprendendo node.js',
        category:'Js',
        body: 'conteudo do post',
        coments: 4
    }

    res.render('blogpost',{ post })
})

app.get('/blog', (req,res) => {
    const posts = [
        {
            title: "Aprendendo Node.js",
            category: "Js",
            body:"conteudo",
            comment: 4
        },
        {
            title: "Aprendendo PHP",
            category: "PHP",
            body:"conteudo",
            comment: 4
        },
        {
            title: "Aprendendo Python",
            category: "Python",
            body:"conteudo",
            comment: 4
        }
    ]

    res.render("blog", { posts })
})

app.listen(3001, () =>{
    console.log("App funcionando!")
})