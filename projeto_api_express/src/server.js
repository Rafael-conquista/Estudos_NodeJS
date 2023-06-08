const app = require('./app')

const dotenv = require('dotenv').config()
const PORT = process.env.PORT
app.listen(PORT, () =>{
   console.log(`server rodando na porta ${PORT}`)  
})