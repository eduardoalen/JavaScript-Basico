// Funções 
function saudacao() {
    console.log("Salve, seja bem-vindo");
    }
    
    saudacao();
    
    console.clear();
    
    // Como enviar parâmetros para as funções
    function saudacaoNome(nome) {
      console.log(`Ola ${nome}, tranquilo?`);
    }
    
    saudacaoNome("Eduardo");
    
    console.clear();
    
    // Retorno da função
    function soma(num1, num2) {
      somar = num1 + num2;
      return somar;
    }
    
    const resultado = soma(10, 20);
    console.log(resultado);
    
    console.clear();
    
    function maiorDoQue50(numero) {
      if (numero > 50) {
        return true;
      }
      
      return false;
    }
    
    maiorDoQue50(60);