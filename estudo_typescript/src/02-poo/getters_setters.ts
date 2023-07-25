export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}
  //versões antigas de getters e setters
  // getIdade(): number {
  //   return this.idade;
  // }

  // getCpf(): string {
  //   return this.cpf;
  // }
  // setCpf(cpf:string): void {
  //   this.cpf = cpf;
  // }
  //versão Typescript

  getIdade(): number {
    return this.idade;
  }

  get cpf(): string {
    return this._cpf;
  }
  set cpf(cpf:string) {
    this._cpf = cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
pessoa.cpf = '22222222222222222222' //isso será o setter
console.log(pessoa.cpf)
