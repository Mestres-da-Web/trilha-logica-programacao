// Criando um array simples
let frutas = ["Uva", "Laranja", "Maçã"];

// console.log(frutas);

// Acessando valores

let primeiroItem = frutas[0];
let segundoItem = frutas[1];

// Alterando valores

frutas[0] = "Banana";
frutas[4] = "Limão";

// console.log(frutas);

// Removendo um valor de um item

frutas[1] = undefined;

// console.log(frutas);

// Acessando o tamanho de um array

// console.log(frutas.length);

// Criando um array complexo

let pessoa = ["João", 28, 1.83, true, ["Rex", 3, true]];

let nome = pessoa[0];
let habilitado = pessoa[3];
let pet = pessoa[4];
let nomePet = pessoa[4][0];

console.log(nome);
console.log(habilitado);
console.log(pet);
console.log(nomePet);
console.log(pet[0]);
