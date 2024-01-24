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

  dormir(teste) {
    console.log(`O passaro ${this.nome} está dormindo!`, teste);
  }
}

class Papagaio extends Passaro {
  _sabeFalar = false;

  constructor(sabeFalar, bico, nome, cor, tamanho) {
    super(bico, nome, cor, tamanho);

    this._sabeFalar = sabeFalar;
  }

  dormir(teste1, teste2) {
    console.log(`O papagaio ${this.nome} está dormindo!`, teste1, teste2);
  }
}

const animal = new Animal("Rex", "verde", 10);
const passaro = new Passaro("curvo", "Piu-piu", "amarelo", 1);
const papagaio = new Papagaio(true, "curvo", "Louro jose", "verde", 2);

animal.dormir();
passaro.dormir(123);
papagaio.dormir(333, 444);
