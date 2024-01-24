/* 
  Promises são promessas de dados, e as promisses possuem 3 estados
  - Pending
  - Fulfilled
  - Rejected
*/

// Sintaxe e exemplos

let promessa = new Promise((resolve, reject) => {
  let resultado = true;

  if (resultado) {
    resolve("Sucesso");
  } else {
    reject(new Error("Erro na promise"));
  }
});

// Executando uma promise simples
// promessa
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   })
//   .finally(() => {
//     console.log("Execução do finally");
//   });

// Encadeamento de promise
// promessa
//   .then((value) => {
//     console.log(value);

//     return 123;
//   })
//   .then((numero) => {
//     console.log(numero);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   })
//   .finally(() => {
//     console.log("Execução do finally");
//   });

// Exemplos de execução em paralelo da promise

let promise2 = new Promise((resolve, reject) => {
  console.log("Executando promise 2");

  setTimeout(() => {
    resolve("Sucesso na promise 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  console.log("Executando promise 3");

  setTimeout(() => {
    resolve("Sucesso na promise 3");
  }, 1000);
});

let promise4 = new Promise((resolve, reject) => {
  console.log("Executando promise 4");

  setTimeout(() => {
    console.log("Promise 4 solve");
    resolve("Sucesso na promise 4");
  }, 2000);
});

promise2.then((resultado) => {
  console.log(resultado);
});

promise3.then((resultado) => {
  console.log(resultado);
});

promise4.then((resultado) => {
  console.log(resultado);
});

// Realizando a busca de dado na API do GitHub
fetch("https://api.github.com/users/jancera")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.login);
  });

console.log("O programa chegou no final");
