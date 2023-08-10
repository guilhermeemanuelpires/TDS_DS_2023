// variavel
var teste = 1;
teste = teste + "A";
// console.log("Exemplo variavel: " + teste);

//if-sele
var situacao = false;

if (situacao) {
  console.log("Você está ativo! 👍");
} else {
  console.log("Você está inativo! 👎");
}

// laços
const lista = ["Douglas", "Laízia", "Otávio", "Diego", "João", "Jean"];
const tamanhoLista = lista.length - 1;
console.log("tamanho da lista:" + tamanhoLista);

for (var i = 0; i <= tamanhoLista; i++) {
  console.log("Aluno(a): " + lista[i]);
}
console.log("-- - while - --");
var i2 = 0;
while (i2 <= tamanhoLista) {
  console.log("Aluno(a): " + lista[i2]);
  i2++;
}

console.log("-- - forEach - --");

lista.forEach((value, index) => {
  console.log(index + " - " + value);
});

// switch
console.log("-- - switch - --");
const valorDeEntrada = 3;

switch (valorDeEntrada) {
  case 1:
    console.log("O valor é 1");
    break;
  case 2:
    console.log("O valor é 2");
    break;
  case 3:
    console.log("O valor é 3");
    break;
  default:
    console.log("Valor indefinido!");
    break;
}

// object
console.log("-- - object - --");

const alunos = [
  { nome: "João", idade: 16 },
  { nome: "Douglas", idade: 16 },
  { nome: "Laízia", idade: 17 },
  { nome: "Otávio", idade: 16 },
  { nome: "Diego", idade: 16 },
  "olá mundo, eu vim para estragar!",
];

alunos.forEach((value) => {
  if (typeof value == "object") {
    console.log(value.nome, value.idade);
  } else {
    console.log(value);
  }
});
