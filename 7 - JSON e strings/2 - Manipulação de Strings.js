// Concatenando strings
let saudacao = "Hello " + "World" + "!";

// console.log(saudacao);

// Template literals

let nome = "Jancer";
let sobrenome = "Lima";

let nomeCompleto = `O nome completo é: ${nome} ${sobrenome} que mora na cidade...`;

// console.log(nomeCompleto);

// Acessando caracteres

// console.log(nome[0]);
// console.log(nome.length);

for (let i = 0; i < nomeCompleto.length; i++) {
  // console.log(nomeCompleto[i]);
}

for (let caractere of nomeCompleto) {
  console.log(caractere);
}
