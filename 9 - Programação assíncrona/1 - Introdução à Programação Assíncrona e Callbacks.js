function lerArquivo(callback) {
  let conteudo;

  // Leitura do arquivo

  // Atribuir o conteúdo do arquivo na variável

  conteudo = 123;

  if (conteudo) {
    callback();
  } else {
    throw new Error("Falha na leitura");
  }
}

lerArquivo(() => {
  console.log("Callback executada");
});

setTimeout(() => {
  console.log("Função do timeout");
}, 2000);

console.log("Programa continua em execução");
