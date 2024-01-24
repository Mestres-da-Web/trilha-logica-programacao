class Pessoa {
  nome = "Fulano";

  idade = 0;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }
}

const pessoa = new Pessoa("João", 28);
const pessoa2 = new Pessoa("Maria", 22);

console.log(pessoa);
console.log(pessoa2);

pessoa.falar();
pessoa2.falar();
