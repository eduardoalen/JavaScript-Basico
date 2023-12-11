const input = require("readline-sync");

const numero_sorteado = 5;

let numero = input.question("Qual numero voce escolhe? ");

console.log(numero, typeof numero);

while (numero != numero_sorteado) {
  console.log('Voce errou o numero, tente novamente...');
  numero = input.question("Qual numero voce escolhe? ");
}

console.log('Voce acertouuu')