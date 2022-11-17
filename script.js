//////// *** cria objeto e funçoes dentro dela, executa e interaje com essa funçoes *** ////////

let player = {
  saude: 100,
  felicidade: 30,
  moedas: 20,
  roupa: 'nao',

  //// *** meto "this" pra interajir com os objetos dentro da variavel
  play: function () {
    this.felicidade += 20;
  },
  eat: function (comida) {
    if (comida == 'uva') {
      this.saude += 10;
    }
  },
  comprar: function () {
    if (this.moedas >= 20) {
      this.moedas -= 20
      this.roupa = 'sim';
    }
    else if (this.moedas < 20) {
      console.log("Moedas insuficientes!")
    }
  }
}

console.log(player);

player.comprar()
console.log(player)