window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  // variaveis 
  snake = []
  positionX = 10;
  positionY = 10;
  foodx = 15;
  foody = 15;
  velx = 0;
  vely = 0;
  grid = 20;
  tam = 3;

  // chamada da função jogo a cada 100 milisegundos
  setInterval(jogo, 100)

  // Controles
  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      // Seta direita
      case 68:
        velx = 1;
        vely = 0;
        break;

      // Seta esquerda
      case 65:
        velx = -1;
        vely = 0;
        break;

      // Seta para cima
      case 87:
        vely = -1;
        velx = 0;
        break;

      // Seta para baixo
      case 83:
        vely = 1;
        velx = 0;
        break;

      //Parar
      case 32:
        vely = 0;
        velx = 0;
    }
  });
}

function jogo() {
  // configuração da tela
  ctx.fillStyle = "#2980b9"
  // distancia borda h, distancia borda v, largura , altura
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // deslocamento
  positionX += velx;
  positionY += vely;

  // Espelhamento
  if (positionX < 0) {
    positionX = grid
  }
  if (positionX > grid) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = grid
  }
  if (positionY > grid) {
    positionY = 0
  }

  // Configuração da cobra
  ctx.fillStyle = "#00f102";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid, grid);
    if (snake[i].x == positionX && snake[1].y == positionY) {
      tam = 3;
    }
  }

  //Posicionamento da cobra
  snake.push({ x: positionX, y: positionY })

  // Apagango
  while (snake.length > tam) {
    snake.shift();
  }

  // Configurando a comida
  ctx.fillStyle = "#F1C40F";
  ctx.fillRect(foodx * grid, foody * grid, grid, grid)

  // Comento a comida
  if (positionX == foodx && positionY == foody) {
    tam++;
    foodx = Math.floor(Math.random() * grid);
    foody = Math.floor(Math.random() * grid);
  }
}