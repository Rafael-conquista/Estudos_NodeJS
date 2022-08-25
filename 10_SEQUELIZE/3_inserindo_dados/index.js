const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')
const User = require('./models/User')
const user = require('./models/User')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/users/create', (req,res)=>{
  res.render('adduser')
})

app.post('/users/create', async(req,res)=>{

  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter
  
  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  }

  console.log(req.body)

  await User.create({
    name,
    occupation,
    newsletter
  })

  res.redirect('/')

})

app.get('/', function (req, res) {
  res.render('home')
})

conn.sync().then(()=>{
  app.listen(3000)
}).catch(err => console.log(err))