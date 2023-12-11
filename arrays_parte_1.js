let arr = ["Eduu", 44, 1.8, true];

console.log(arr);

// Acessar elementos do array
console.log("Primeiro elemento:", arr[0]);

// Obter o tamanho do array
console.log("Tamanho do array:", arr.length);

console.clear();

// Percorrer arrays
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.clear();

// pegando um elemento desse meu array
for (let elemento of arr) {
  console.log(elemento);
}

console.clear();

// Percorrer os indices do meu array
for (let indice in arr) {
  console.log(indice, arr[indice]);
}