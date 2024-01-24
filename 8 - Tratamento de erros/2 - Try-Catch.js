function divisao(num1, num2) {
  if (num2 === 0) {
    throw new Error("Não é permitido divisão por 0");
  }

  return num1 / num2;
}

let resultado = undefined;

try {
  resultado = divisao(2, 0);
} catch (error) {
  console.log("Erro capturado");
  resultado = 0;
} finally {
  console.log("Finally");
}

console.log(`Resultado: ${resultado}`);

console.log("Final do programa");
