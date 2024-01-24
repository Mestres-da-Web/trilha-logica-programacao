function divisao(num1, num2) {
  if (num2 === 0) {
    throw new Error("Não é permitido divisão por 0");
  }

  return num1 / num2;
}

const resultado = divisao(2, 0);

console.log(resultado);
