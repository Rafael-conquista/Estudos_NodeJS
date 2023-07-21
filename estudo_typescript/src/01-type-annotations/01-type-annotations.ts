const nome2 = 'rafael' //aqui ele já declara a const como string

//exemplos
const nome: string = 'luiz' //isso é type annotation
const idade:number = 21
const bool: boolean = true
const simbolo: symbol = Symbol('qualquer simbolo')
// const big:bigint = 10n

const arrayNumbers: Array<number> = [1,2,3,4]
const arrayNumbers2: number[] = [1,2,3,4]

const arrayStrings: Array<string> = ['1', '2', '3']
const arrayStrings2: string[] = ['1', '2', '3']

//objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: "rafael",
  idade: 21,
  adulto: true
}
//neste caso o "?" significa que a chave é opcional

//funções
function soma(x: number, y: number): number{
  return x + y
  //caso eu não defina o tipo do retorno, ele infere
}
const result = soma(2, 2)
//ou
const soma2: (x:number, y:number) => number = (x,y) => x + y
