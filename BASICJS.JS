//operadores aritiméticos(matematicos)
let salario = 100;

//+ , - , * , / , **
//console.log(salario + salario);
//R:200
//operadores de incremento e decremento ++ ou --
let idade = 18;

console.log(idade++);
console.log(idade);
//operandores atribuicao

let valorTecladoGamer = 100;
//valorTecladoGamer = valorTecladoGamer x valorTecladoGamer;
valorTecladoGamer *= valorTecladoGamer;
console.log(valorTecladoGamer);

//operadores de igualdade 
// igualdade estrita
console.log( 1 === 1);
console.log('1' === 1 );

//igualdade solta
console.log(1==1);
console.log ('1' == 1);

//operador ternário
// tem um cliente com mais de 100 pontos PREMIUM, se tiver menos COMUM
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo);

//operadores lógicos AND OR NOT pt-BR E OU NAO
// OPERADOR LOGICO e (&&)
// RETORNA TRUE APENAS SE AS DUAS CONDIÇÕES fossem true
  
 

let maiorDeIdade = false;
let possuiDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiDeTrabalho;
console.log('podeAplicar: ', podeAplicar);
//operador logico ou (||)
// SE UM DOS OPERANDOS FOR TRUE ELE ENCAMINHA TRUE SE FOR TUDO FALSE ELE RESETA



//operador logico NOT ! (NEGAÇÃO)
let candidatoRecusado = !podeAplicar;
console.log('candidato Recusado' ,candidatoRecusado);
{};

valor1 = 24;
valor2= 31;
valor3='sim';
valor4='sim';
valor5='sim';
let umidade = valor1 >= 26 ? 1 : 0;
let temperatura = valor2 >= 30 ? 1 : 0;
let clima = valor3 = 'sim' ? 1 : 0;
let horario = valor4 = 'sim' ? 1 : 0;
let energia = valor5 = 'sim' ? 1 : 0;
console.log (umidade, temperatura, clima, horario, energia);
function acionarBomb(){
    return (umidade == temperatura == clima == horario == energia);

}





let funcionandoBomb = acionarBomb();
let plantada = funcionandoBomb = true ? 'tudo ok' : 'algum sistema indetificou falha';
console.log(plantada);


 
