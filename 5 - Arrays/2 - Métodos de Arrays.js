// Explorando métodos de arrays

let frutas = ["Maçã", "Banana", "Morango", "Limão"];

// Adicionando item no final do array
frutas.push("Laranja");

// console.log(frutas);

// Removendo item do final do array
frutas.pop();

// console.log(frutas);

// Adicionando item no inicio do array
frutas.unshift("Laranja");

// console.log(frutas);

// Removendo item do inicio do array
frutas.shift();

// console.log(frutas);

// Buscando por elementos dentro de um array
let indice = frutas.indexOf("Limão");

// console.log(indice);

let existe = frutas.includes("Morango");

// console.log(existe);

// Usando splice para deletar um item

// let resposta = frutas.splice(1, 2);

// console.log(frutas);
// console.log(resposta);

// Usando o splice para adicionar um ou mais items
// let resposta = frutas.splice(1, 0, "Kiwi", "Mamão");

// console.log(frutas);
// console.log(resposta);

// Usando o splice para substituir um ou mais items
// let resposta = frutas.splice(1, 1, "Kiwi");

// console.log(frutas);
// console.log(resposta);

// Usando o slice
let fatia = frutas.slice(1, 3);

// console.log(frutas);
// console.log(fatia);

// Usando o concat
let novoArray = frutas.concat(fatia);

// console.log(novoArray);

// Usando o join
let texto = frutas.join(", ");
console.log(texto);

// Usando o reverse
frutas.reverse();
console.log(frutas);
