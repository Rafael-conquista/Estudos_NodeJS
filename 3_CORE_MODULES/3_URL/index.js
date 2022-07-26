const url = require('url')
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira'
const parsedurl = new url.URL(address)

console.log(parsedurl.host)
console.log(parsedurl.pathname)
console.log(parsedurl.search)
console.log(parsedurl.searchParams)
console.log(parsedurl.searchParams.get('produtos'))

