// Coerção manual explicita (manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroFormatoString = String(numero);
console.log(numeroFormatoString, typeof numeroFormatoString);

console.log(Number('1012'));

console.clear();

// Coerção implicita (automatica)

console.log(10 + '1');
console.log('10' - 1);
console.log('10' * 3);

console.log(10 - 'asdas');