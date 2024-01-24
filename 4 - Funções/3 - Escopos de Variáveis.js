// Exemplo de conflito de variáveis (escopo global)
let nome = "João";

function saudacao() {
  let nome = "Maria";
  return "Olá, " + nome + "!";
}

// console.log(saudacao());
// console.log(nome);

// Exemplo de escopo de variáveis locais
function saudacao2() {
  let nomeLocal = "Maria";
  return "Olá, " + nomeLocal + "!";
}

// console.log(saudacao2());
// console.log(nomeLocal);
