// Objetos

let pessoa = {
    nome: 'Eduardo',
    idade: 35,
    'altura-da-pessoa': 160
  }
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa['altura-da-pessoa']);
  
  // Como adicionar um elemento (chave) no objeto
  pessoa.peso = 78.9;
  console.log(pessoa);
  
  // Remover um elemento (chave) objeto
  delete pessoa.peso;
  console.log(pessoa);
  
  // Como percorrer?
  
  for (let chave in pessoa) {
    console.log(chave);
  }