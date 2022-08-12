const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
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

app.listen(3000, () =>{
    console.log("App funcionando!")
})