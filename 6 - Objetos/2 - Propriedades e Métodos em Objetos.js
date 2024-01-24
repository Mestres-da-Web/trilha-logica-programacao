// Adicionando uma propriedade em um objeto

let pessoa = {
  nome: "João",
  idade: 25,
  altura: 1.85,
};

pessoa.apelido = "Joao2";
// pessoa.profissao = {
//   cargo: "Desenvolvedor",
//   salario: 1232,
// };

// console.log(pessoa);

// Removendo uma propriedade de um objeto

// delete pessoa.profissao.salario;
// delete pessoa.altura;

// console.log(pessoa);

// Alterando propriedade de objeto

pessoa.nome = "Maria";
pessoa.idade = 25;

// console.log(pessoa);

// Adicionando métodos a um objeto

pessoa.falar = () => {
  console.log("Pessoa falando...");
};

pessoa.falar();

// console.log(pessoa);

// Acessando um propriedade que não existe

console.log(pessoa.profissao?.cargo);
