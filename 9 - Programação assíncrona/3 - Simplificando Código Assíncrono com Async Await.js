// Declarando funções usando async

async function funcaoAssincrona() {
  return "Hello, World!";
}

const funcaoAssincrona2 = async () => {};

// Usando async-await com promises

async function testePromise(timeout) {
  const promise = new Promise((resolve, reject) => {
    console.log("Iniciando execução da promise");

    setTimeout(() => {
      resolve("Promise resolvida");
    }, timeout);
  });

  const resposta = await promise;

  console.log(resposta);

  console.log("Continuando execução da função");
}

// testePromise(2000);
// testePromise(1000);
// testePromise(5000);

// Tratamento de erros com async-await

async function testePromiseError(timeout) {
  const promise = new Promise((resolve, reject) => {
    console.log("Iniciando execução da promise");

    setTimeout(() => {
      reject("Promise rejeitada");
    }, timeout);
  });

  try {
    const resposta = await promise;

    console.log(resposta);
  } catch (e) {
    console.log("Error: ", e);
  }

  console.log("Continuando execução da função");
}

// testePromiseError(1000);

const getGithubUser = async () => {
  const response = await fetch("https://api.github.com/users/jancera");

  const data = await response.json();

  return data;
};

const teste = async () => {
  const user = await getGithubUser();

  console.log(user);
};

teste();
