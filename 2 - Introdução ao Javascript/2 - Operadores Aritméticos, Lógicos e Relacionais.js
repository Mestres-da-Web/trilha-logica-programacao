// Operadores aritiméticos

let a = 10;
let b = 3;

let soma = a + b;
let subtracao = b - a;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;
let exp = a ** b;

// console.log(soma, subtracao, multiplicacao, divisao, resto, exp);

// Operadores de atribuição
let x = 5;
x += 3; // x = x + 3;
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 2; // x = x / 2

// console.log(x);

// Operadores Relacionais
// console.log(5 == 2); // false
// console.log(5 == 5); // true

// console.log(5 === "5"); // false
// console.log(5 === 5); // true

// console.log("5" == 5); // true

// console.log(5 != 5); // false
// console.log(5 != 2); // true

// console.log(5 !== "5"); // true
// console.log(5 !== "2"); // true

// console.log(2 > 5); // false
// console.log(2 < 5); // true

// console.log(2 >= 5); // false
// console.log(5 >= 5); // true
// console.log(6 >= 5); // true

// console.log(2 <= 5); // true
// console.log(2 <= 2); // true

// Operadores lógicos

let idade = 22;
let possuiCarteira = false;

// E Lógico
console.log(idade > 20 && possuiCarteira === true); // false
console.log(idade > 20 && possuiCarteira === false); // true

// OU Lógico
console.log(idade > 20 || possuiCarteira === true); // true
console.log(idade > 30 || possuiCarteira === false); // true
console.log(idade > 30 || possuiCarteira === true); // false

// Não Lógico

console.log(!possuiCarteira);
console.log(!true);
console.log(!(idade > 20));
