const nome = 'Rafael'
const sobrenome = 'conquista'

const falanome = () =>{
    return nome + ' '+ sobrenome
}

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falanome = falanome
exports.nome = nome
exports.sobrenome = sobrenome
exports.falanome = falanome
//das duas parte é possível incluir nos exports