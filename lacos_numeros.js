const input = require("readline-sync");

let soma = 0;
let nota;

for (let i = 1; i <= 3; i++) {
  nota = Number(input.question(`Informe a nota ${i} do aluno: `));

  soma = soma + nota;
}

console.log(`A média do aluno é ${soma / 3} `);