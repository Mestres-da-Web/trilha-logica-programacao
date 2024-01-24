/* 
  No JSON temos os seguintes tipos de dados:
    - string
    - number
    - object
    - arrays
    - null
    - boolean
*/

const pessoa = {
  nome: "Jane Doe",
  idade: 25,
  cidade: "Exemploland",
  profissoes: ["Engenheira", "Artista"],
  ativo: false,
  informacoes: {
    hobbies: ["Música", "Artes"],
    linguagens: ["Python", "Java"],
  },
  andar: () => {},
};

const JSONString = JSON.stringify(pessoa);

console.log(JSONString);

const ObjetoJSON = JSON.parse(JSONString);

console.log(ObjetoJSON);
