const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.static('public'))

app.get('/pagina2', (req, res) => {
    res.sendFile(`${basePath}/pagina2.html`)
  })

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
  })

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`)
  })
