// function executaSoma(callback) {
//   return callback(2, 2);
// }

// let resultado = executaSoma((num1, num2) => {
//   return num1 + num2;
// });

// console.log(resultado);

let frutas = ["Maçã", "Banana", "Morango", "Uva", "Abacaxi"];

// Iteração em arrays usando forEach

frutas.forEach((item, index, array) => {
  // console.log(item, index, array);
  // No forEach não retornamos nada
});

// Iteração em arrays usando map

let novoArray = frutas.map((item, index, array) => {
  return "Frutas: " + item;
});

// console.log(frutas);
// console.log(novoArray);

// Iteração usando for loop

for (let i = 0; i < frutas.length; i++) {
  frutas[i] = "Frutas: " + frutas[i];
}

// console.log(frutas);
