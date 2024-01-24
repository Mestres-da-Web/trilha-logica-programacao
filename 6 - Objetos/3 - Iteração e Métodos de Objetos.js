let pessoa = {
  nome: "João",
  idade: 25,
  altura: 1.85,
  temCNH: true,
  apelidos: ["Jão", "J", "JJ"],
  pets: [
    {
      nome: "Bob",
      raca: "Vira-lata",
      idade: 2,
    },
    {
      nome: "Thor",
      raca: "Pastor Alemão",
      idade: 5,
    },
  ],
};

// Iterando sobre as propriedades de um objeto

for (let propriedade in pessoa) {
  // console.log(pessoa[propriedade]);
}

// Extraindo chaves de um objeto

let chaves = Object.keys(pessoa);
console.log(chaves);

// Extraindo valores de um objeto

let valores = Object.values(pessoa);
console.log(valores);

// Extraindo chaves e valores de um objeto

let entradas = Object.entries(pessoa);
console.log(entradas);
