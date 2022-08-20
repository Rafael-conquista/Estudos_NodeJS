const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', function (req, res) {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`

  conn.query(query, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

app.get('/books', function (req, res) {
  const query = `SELECT * FROM books`

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
    }

    const books = data

    console.log(data)

    res.render('books', { books })
  })
})

app.get('/books/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM books WHERE id = ${id}`

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
      return
    }

    const book = data[0]

    console.log(data[0])

    res.render('book', { book })
  })
})

app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id

  const sql = `SELECT * FROM books WHERE id = ${id}` 

  conn.query(sql, function(err,data) {
    if (err) {
      console.log(err)
      return
    }

    const book = data[0]

    res.render('editbooks', { book })
  })
})

app.post('/books/updatebooks', (req, res) => {

  const id = req.body.id
  const title = req.body.title
  const pageqty = req.body.pageqty

  const  sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id} `

  conn.query(sql, function(err){
    if (err) {
      console.log(err)
      return
    }

    res.redirect('/books')
  })

})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql2',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})