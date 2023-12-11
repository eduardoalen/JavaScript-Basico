const arr1 = [30, 12, 45, 34, 29];
const arr2 = [];

// Fatiamento: slice
console.log(arr1.slice(0, 1)); //pega de 0 até menor que 1
console.log(arr1.slice(0, 2)); //pega de 0 até menor que 2
console.log(arr1.slice(2)); //pega de indice 2 em diante

console.clear();
// Adicionar elemento: push | unshift
console.log("Antes de adicionar:", arr2);
arr2.push(10, 20, 30);
arr2.push(40);
console.log("Depois de adicionar:", arr2);

console.log("Antes de adicionar o unshifit:", arr2);
arr2.unshift(0);
console.log("Depois de adicionar o unshifit:", arr2);

console.clear();

// Removendo elementos: pop | shift
console.log("Antes de remover com o pop:", arr2);
const elementoRemovido = arr2.pop();
console.log("Depois de remover com o pop:", arr2);
console.log(`O elemento ${elementoRemovido} foi removido`);

console.log("Antes de remover com o shift:", arr2);
arr2.shift();
console.log("Depois de remover com o shift:", arr2);

console.clear();

// Concatenando arrays: concat

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

// Buscando elementos: indexOf | lastIndexOf
console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34);
console.log(indiceDoElemento34);

let arr3 = [1, 2, 3, 3, 5, 3];
console.log(arr3.indexOf(3));
console.log(arr3.lastIndexOf(3));

console.clear();

// Descobrindo a existencia de um elmento; includes
console.log(arr1);
console.log(arr1.includes(11));
console.log(arr1.includes(12));

console.clear();

// Invertendo arrays: reverse

console.log('Array normal:', arr1);

const arrInvertido = arr1.reverse();
console.log('Array invertido:', arrInvertido);