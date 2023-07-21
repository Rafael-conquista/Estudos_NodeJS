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

//tipo objeto
//se vc declarar um obj ele apenas reconhecerá as chaves que foram definidas
//para mudar isso: usar index assignature
const objA: {
  readonly chaveA: string, //apenas para leitura e não alteração
  chaveB: string,
  [key:string]: unknown
} = {
  chaveA: "a",
  chaveB: "b"
}

objA.chaveC = "c"
// normalmente não é uma boa ideia deixar o design aberto desta forma
// a não ser que esse seja o objetivo mesmo

//Arrays
// Array<t> ou T[] onde T=tipo
function multiplicaArgs(...args: Array<number>):number{
  return args.reduce((ac, valor) => ac * valor,1)
}
//ou
// function multiplicaArgs(...args: number[]):number{
//   return args.reduce((ac, valor) => ac * valor,1)
// }

const teste = multiplicaArgs(1,2,3)

//tipo tuple --> igual arrays de linguagens fortemente tipadas
const dadosTuple: [number, string] = [1, 'rafael']
//neste exemplo ainda é possível modificar os valores(mas não os seus tipo)
//portanto ainda não é imutável
// para uma tuplca com tamanho não definido(basicamente um array):
const dadosTuple2:[number, string, ...string[]] = [1, 'rafael']
// para transformar o comportamento dos arrays em imutável, deve se usar o readonly
const dadosTuple3: readonly[number, string, ...string[]] = [1,'rafael']
// tipo never
//não retorna nada, pode ser usada em laços infinitos ou erros
function criaErro():never{
  throw new Error('erro qualquer')
}

