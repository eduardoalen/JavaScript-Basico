const idade = 10;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

const nota = 6;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota < 7 && nota >= 5) {
    console.log("Recuperação");
} else if (nota < 5) {
    console.log("Reprovado");
}