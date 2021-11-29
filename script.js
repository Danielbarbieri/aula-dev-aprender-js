// let corAmostra = "roxo"

// function trocaCor(cor, tonalidade){
//   corAmostra = cor + " " + tonalidade;
// };

// console.log(corAmostra);
// trocaCor("laranja", "claro");
// console.log(corAmostra);

////////////////////////////////////////////////////////////////////////

// function multiplicar2(valor){
//   return valor * 2
// }

// console.log(multiplicar2(5))

// let novoNumero = multiplicar2(8)
// console.log(novoNumero)

////////////////////////////////////////////////////////////////////////
//  trocando valor variaveis

// let a = "vermelho"
// let b = "azul"
// let c = a

// a=b
// b=c

// console.log(a)
// console.log(b)


////////////////////////////////////////////////////////////////////////

// if else comparando horas e retornando uma saudação

// function addZero(i) {
//   if (i < 10) { i = "0" + i }
//   return i;
// }


// const d = new Date();
// let h = addZero(d.getHours());
// let m = addZero(d.getMinutes());
// let s = addZero(d.getSeconds());
// let time = h + ":" + m + ":" + s;
// let mensagem = saudacao
// console.log(time)

// // document.getElementById("demo").innerHTML = time;
// function saudacao() {
//   if (Number(h) >= 06 && Number(h) < 12) {
//     console.log("bom dia")
//   } else if (Number(h) >= 12 && Number(h) < 18) {
//     console.log("boa tarde")
//   } else {
//     console.log("boa noite")
//   }
//   // return saudacao;
// }


// saudacao();

// document.getElementById("demo").innerHTML = time;
// document.getElementById("demo2").innerHTML = mensagem;
// // saudacao();


////////////////////////////////////////////////////////////////////////
// swirch case

// let permissao;
// permissao = '';

// switch(permissao){
//   case 'comum':
//   console.log('usuario comum');
//   break;
//    case 'gerente':
//   console.log('usuario gerente');
//   break;
//    case 'diretor':
//   console.log('usuario diretor');
//   break;
//   default:
//   console.log('usuario não rcebido')

// }



////////////////////////////////////////////////////////////////////////

// laço loop for



// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i];

// }

// console.log(text)


// contando numeros pares e impares // modulos

// for(let i = 1; i <= 50; i++){
//   if(i%2 !== 0){
//     console.log(i);
//   }
// }


////////////////////////////////////////////////////////////////////////

// while loop 


// let i = 0;
// while (i <= 10) {
//   console.log("O número é " + i);
//   i++;
// }






////////////////////////////////////////////////////////////////////////

//  Função  que usa 2 numeros e retorna o maior entre else


// let valorMaior = max(150, 50)
// console.log(valorMaior);

// function max(numero1, numero2) {
//   return numero1 > numero2 ? numero1 : numero2;
// }


// let resultado = fizzBuzz2(20);


// function fizzBuzz2(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";

//     if (i % 3 === 0) str += "fizz"
//     if (i % 5 === 0) str += "buzz"
//     if (str === "") str = i;

//     console.log(str);
//   }
// }


// let resultado = fizzBuzz(15);
// console.log(resultado);

// function fizzBuzz(entrada){
//   if(typeof entrada !== 'number')
//   return 'não é um número';
//   if((entrada % 3 === 0) && (entrada % 5 === 0))
//   return 'fizzBuzz';
//   if(entrada % 3 === 0)
//   return 'Fizz';
//   if(entrada % 5 === 0)
//   return 'Buzz';
//   return entrada;
// }

// ///////////////////////////////////////////////////////////////////
// Média de um array com notas

// const array = [70, 70, 100, 45, 50, 85, 100];
// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas) {
//   const media = calcularMedia(notas);

//   if (media < 59) return 'F';
//   if (media < 69) return 'D';
//   if (media < 79) return 'C';
//   if (media < 89) return 'B';
//   return 'A';
// }




// function calcularMedia(array){
//   let soma = 0;
//   for (let valor of array) {
//     soma += valor;

//   }
//   return soma / (array.length);
// }


// ///////////////////////////////////////////////////////////////////
// loop nested.... função que exibe quantidade de *


// exibirAsteriscos(2);

// function exibirAsteriscos(linhas) {
//   for (let linha = 1; linha <= linhas; linha++) {
//     let padrao = '';
//     for (let i = 0; i < linha; i++) {
//       padrao += '*';
//     }
//     console.log(padrao);
//   }
// }



// ///////////////////////////////////////////////////////////////////
// exibir numeros primos



// exibirNumerosPrimos(100);

// function exibirNumerosPrimos(limite) {
//   for (let numero = 2; numero <= limite; numero++) {
//     if (NumeroPrimo(numero)) console.log(numero);
//   }
// }

// function NumeroPrimo(numero) {
//   for (let divisor = 2; divisor < numero; divisor++) {
//     if (numero % divisor === 0) {
//       return  false;
//     }
//   }
//   return true;
// }


// ///////////////////////////////////////////////////////////////////
// Factory fucntion (função de fabrica)

// function criarCachorro(racaCachorro, alturaCachorro, tipoPelo) {
//   return {
//     racaCachorro, 
//     alturaCachorro, 
//     tipoPelo,

//   }
// }
// const cachorro1 = criarCachorro('vira-lata', 'baixo', 'longo');
// console.log(cachorro1);




////////////////////////////////////////////////////////
// Objeto endereço

// let endereco = {
//   rua: 'al. Santos',
//   cidade: 'Santos',
//   cep: 11080
// };

// function exibirEndereco(endereco) {
//   for (let chave in endereco)
//     console.log(chave, endereco[chave]);
// }

// exibirEndereco(endereco);

