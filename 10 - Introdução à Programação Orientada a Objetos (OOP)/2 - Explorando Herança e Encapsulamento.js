class Animal {
  nome = "";
  cor = "";
  tamanho = 0;

  constructor(nome, cor, tamanho) {
    this.nome = nome;
    this.cor = cor;
    this.tamanho = tamanho;
  }

  dormir() {
    console.log(`O animal ${this.nome} está dormindo!`);
  }
}

class Passaro extends Animal {
  bico = "";

  constructor(bico, nome, cor, tamanho) {
    super(nome, cor, tamanho);

    this.bico = bico;
  }

  voar() {
    console.log("O passaro está voando");
  }
}

const animal = new Animal("Rex", "verde", 10);
const passaro = new Passaro("curvo", "piu-piu", "amarelo", 1);

console.log(animal);
console.log(passaro);

animal.dormir();
passaro.dormir();

passaro.voar();
