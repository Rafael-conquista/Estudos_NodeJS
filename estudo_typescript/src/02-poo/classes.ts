export class Empresa{
  public readonly nome: string
  private readonly colaboradores: Colaborador[] = [] //iniciado vazio
  protected readonly cnpj: string
  //private apenas acessivel dentro da classe (encapsulamento)
  constructor(nome:string, cnpj: string){
    this.nome = nome
    this.cnpj = cnpj
  }

  public adicionaColaborador(colaborador:Colaborador): void{
    this.colaboradores.push(colaborador)
  }
  public mostraColaboradors():void{
    for(const colaborador of this.colaboradores){
      console.log(colaborador)
    }
  }
}
// classe tbm funciona comom tipagem
export class Colaborador{
  constructor(
    public readonly nome:string, public readonly sobrenome:string
  ){

  }

}

const empresa1 = new Empresa('nome da empresa', "cnpj")
const colaborador1 = new Colaborador('c1','1')
const colaborador2 = new Colaborador('c2', '2')
const colaborador3 = new Colaborador('c3', '3')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)

console.log(empresa1)

