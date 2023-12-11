// Operadores booleanos

const numero = 10;
console.log(numero == 20);
console.log(numero < 20);

console.log(numero == '10'); //compara o conteudo
console.log(numero === '10'); //compara o tipo

console.clear(); //limpa o console

console.log(10 != 10);
console.log(10 != '10');
console.log(10 !== '10');

// condições logicas

let idade = 21;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log("Posso dirigir?", possoDirigir);

idade = 40;
const votoFacultativo = idade < 18 || idade >= 70;

console.log(votoFacultativo);
console.log(!votoFacultativo);