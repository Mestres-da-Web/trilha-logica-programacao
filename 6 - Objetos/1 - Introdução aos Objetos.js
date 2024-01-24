// Criando um objeto simples

let pessoa = {
  nome: "Jancer",
  idade: 22,
  altura: 1.75,
  temCHN: false,
  teste: undefined,
};

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.temCHN);

// Criando um objeto complexo

let pessoa2 = {
  nome: "Jancer",
  idade: 22,
  altura: 1.75,
  temCHN: false,
  apelidos: ["Jancer2", "Jancer3"],
  pets: [
    {
      nome: "Rex",
      tipo: "Cachorro",
      idade: 1,
    },
    {
      nome: "Thor",
      tipo: "Cachorro",
      idade: 2,
    },
  ],
};

// console.log(pessoa2);
// console.log(pessoa2.apelidos[0]);
// console.log(pessoa2.pets[0].nome);

// Verificando tipo do dado
console.log(typeof pessoa);
console.log(typeof pessoa.nome);
console.log(typeof pessoa2.apelidos, Array.isArray(pessoa2.apelidos), pessoa2.apelidos.length);
