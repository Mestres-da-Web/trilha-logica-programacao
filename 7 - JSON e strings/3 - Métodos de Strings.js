// Métodos de Manipulação de Strings em JavaScript

// Exemplo de string para demonstração
const frase = "JavaScript é uma linguagem de programação poderosa.";

const maiusculas = frase.toUpperCase();

// console.log(maiusculas);

const minusculas = frase.toLowerCase();

// console.log(minusculas);

const parteDaString = frase.substring(4, 20);
// const parteDaString = frase.substring(10);

// console.log(parteDaString);

const parte = frase.slice(-5);

// console.log(parte);

const palavras = frase.split(" ");
// const palavras = frase.split("a");

// console.log(palavras);

const fraseTeste = "  Hello World!         ";

const fraseLimpa = fraseTeste.trim();

// console.log(fraseLimpa);

const indiceDeJava = frase.indexOf("ling");

// console.log(indiceDeJava);

const ultimoindice = frase.lastIndexOf("a");

// console.log(ultimoindice );

const string = frase.replace("JavaScript", "Typescript");
console.log(string);
