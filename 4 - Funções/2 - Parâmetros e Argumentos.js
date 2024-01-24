// Flexibilidade com parâmetros

function soma(numero1, numero2) {
  console.log("O primeiro número é: ", numero1);
  console.log("O segundo número é: ", numero2);

  let resultado = numero1 + numero2;

  console.log("O resultado da some é: ", resultado);
}

// soma(1, 2);
// soma(4, 4);
// soma(9, 1);

// Parâmetro opcional

function multiplicacao(num1, num2) {
  console.log("Parâmetros: ", num1, num2);

  let resultado = num1 * num2;

  console.log("Resultado da multiplicação: ", resultado);
}

// multiplicacao(3);

// Imutabilidade dos parâmetros

function saudacao(nome) {
  let aux = nome + "!";

  console.log("Olá ", aux);

  return nome;
}

const destinatario = saudacao("Jancer");

console.log(destinatario);
