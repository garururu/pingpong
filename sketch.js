//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 18;
let raioBolinha = diametroBolinha /2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//colisao rect+circle
let colidiu = false;

//pontuação 
let meusPontos = 0;
let oponentePontos = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//balanceamento de dificuldade
let chanceDeErrar = 0;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600,400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  moveRaquete();
  colisaoRaquete();
colisaoRaqueteBiblioteca(xRaquete,yRaquete)
colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente)
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
  
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *=-1;
}
  
  if (yBolinha + raioBolinha > height || yBolinha - raioBolinha  < 0){
    velocidadeYBolinha*=-1;
}
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
  
}

function moveRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 6;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 6;
  }
  
  yRaquete = constrain(yRaquete, 5, 305);
  
}

function colisaoRaquete(){
  
if (xBolinha - raioBolinha < xRaquete + comprimentoRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
  velocidadeXBolinha *=-1;
  raquetada.play();
}
}

function colisaoRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *=-1;
    raquetada.play();
  }
}

function calculaChanceDeErrar(){
  
  if (oponentePontos >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function movimentaRaqueteOponente(){
  
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;

  calculaChanceDeErrar();
  
  //  if (keyIsDown(87)){
  //  yRaqueteOponente -= 6;
  //}
  
 // if (keyIsDown(83)){
 //   yRaqueteOponente += 6;
  //}
  
  yRaqueteOponente += velocidadeYOponente;
  
  yRaqueteOponente = constrain(yRaqueteOponente, 5, 305);
  
}

function incluiPlacar(){
  
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill((color(255,140,0)));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill((color(255,140,0)));
  rect(450,10,40,20);
  fill(255);
  text(oponentePontos, 470, 26);
  
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  
  if (xBolinha < 10){
    oponentePontos += 1;
    ponto.play();
  }
  
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}






