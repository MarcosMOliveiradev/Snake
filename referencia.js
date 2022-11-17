
////////// *** laço para encontrar um numero especifico no array *** //////////////

/*let inventario = [0, 0, 1, 0];

 for (let i = 0; i < inventario.length; i++) {
   if (inventario[i] == 1) {
     alert("poção encontrada")
   }
 } */

//// *** Laço para encontrar um numero especifo demtro de um array bidmensional *** ////
/*
let inventario = [[1, 2, 3, 4], [5, 6, 7, 8]];

console.table(inventario);

let a = inventario[1];

for (let i = 0; i < a.length; i++) {
 if (a[i] == 8) {
   alert("slote encontrado!")
 }
}; */
///////////////////////////////////////*************************************///////////////////////////////////////

var a = prompt("digite qual linha ");

var b = prompt("digite qual coluna");

if (b >= 5) {
  alert("VOCÊ ESCOLEU UM NUMERO INVALIDO, JOGUE NOVAMENTE")
  var b = prompt("digite qual coluna");
}
let bomba = [[0, 0, 0, 1], [0, 0, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0]];

let lin = a - 1;
let col = b - 1;
let jogada = bomba[lin][col];

console.log(jogada)

let jogadas = []
jogadas.push(jogada)

console.log(jogadas)

for (let i = 0; i < jogadas.length; i++) {
  if (jogadas[i] == 1) {
    alert("você perdeu!")
    console.log("vc esta no for")
  }
  else if (jogadas[i] == 0) {
    alert("***** PARABENS VOCÊ GANHOU ******")
  }
}

