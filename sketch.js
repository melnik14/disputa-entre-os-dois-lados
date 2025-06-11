//disputa entre os dois lados
//disputa entre os dois lados é um jogo de corrida onde a bolinha verde representa o campo e a bolinha azul representa a cidade, o jogo só começa quando clicado na tela, use a tecla A para mover o campo e a tecla B para mover a cidade, o objetivo de ambos é chegar ao final primeiro.
let player1, player2;

function setup() {
  createCanvas(800, 400);
  // Inicializa os jogadores na linha de partida
  player1 = { x: 50, y: height/3, speed: 5, color: 'green', name: 'Campo' };
  player2 = { x: 50, y: 2*height/3, speed: 5, color: 'blue', name: 'Cidade' };
}


 function draw() {
    background('rgb(252,218,224)')

  // Desenha a pista
  fill(200);
  rect(0, height/3 - 20, width, 40);
  rect(0, 2*height/3 - 20, width, 40);
  
  // Desenha os jogadores
  fill(player1.color);
  ellipse(player1.x, player1.y, 30, 30);
  fill(player2.color);
  ellipse(player2.x, player2.y, 30, 30);
  
  // Movimentação do Player 1 (tecla A)
  if (keyIsDown(65)) { // A
    player1.x += player1.speed;
  }
  
  // Movimentação do Player 2 (tecla B)
  if (keyIsDown(66)) { // B
    player2.x += player2.speed;
  }
  
  // Limites da pista
  player1.x = constrain(player1.x, 0, width - 15);
  player2.x = constrain(player2.x, 0, width - 15);
  
  // Checar quem chega primeiro
  if (player1.x >= width - 15) {
    fill(0);
    textSize(32);
    text('𝒋𝒐𝒈𝒂𝒅𝒐𝒓 𝒅𝒐 𝒄𝒂𝒎𝒑𝒐 𝒗𝒆𝒏𝒄𝒆!', width/2 - 150, height/2);
    noLoop();
  } else if (player2.x >= width - 15) {
    fill(0);
    textSize(32);
    text('𝒋𝒐𝒈𝒂𝒅𝒐𝒓 𝒅𝒂 𝒄𝒊𝒅𝒂𝒅𝒆 𝒗𝒆𝒏𝒄𝒆!', width/2 - 150, height/2);
    noLoop();
  }
}