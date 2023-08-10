function somaDoisValores(a, b) {
  return a + b;
}

const novaFuncao = (a, b) => {
  console.log("Essa nova função retorna: " + (a + b));
};

var numero1 = 3;
var numero2 = 2;

console.log("O resultado da soma é: " + somaDoisValores(numero1, numero2));

novaFuncao(numero1, numero2);
