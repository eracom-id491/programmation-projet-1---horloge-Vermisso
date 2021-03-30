let customFont; // Ne pas toucher à cette ligne
var gif_loadImg;
let escargot;
let soleil;
let lune;
let Lapin
let millisecond = millis();



// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
  escargot = loadImage('img/Escargot.gif');
  soleil = loadImage('img/Soleil.png');
  lune = loadImage('img/Lune.png');
  Lapin = loadImage('img/Lapin.gif');
}
// ---------------------------------- s//

function setup(){
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
  rectMode(CENTER);
  imageMode(BOTTOM);
  textAlign(CENTER);
  noStroke();
  
}

function draw(){
  background(0, 0, 0);
  showTime(); // Ne pas toucher à cette ligne

  fill (255, 255, 255);
  let t = map(minute(), 0, 59, 0, 1);
  image(escargot, t * width, height - 150, 150, 150);
  let t2 = map(millis(), 0, 999, 0, 1);
  image(Lapin, t2 * width, height - 120, 180, 180);
  let s = map(second(), 0, 59, 0, TWO_PI) - HALF_PI;
  rotate(HALF_PI);
  translate(height, - width/2);
  fill(255,0,0);
  image(soleil, 0 + cos(s) * width /2 , 0 + sin(s) * width / 2, 200, 200);
  fill(0, 255, 0);
  image(lune, 0 + - cos(s) * width / 2  , 0 + -sin(s) * width / 2 , 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
}

// Les blocs showTime et formatTime s'occupent d'afficher correctement l'heure en bas à gauche de la page.
function showTime() {
  let time =
    formatTime(hour()) +
    ":" +
    formatTime(minute()) +
    ":" +
    formatTime(second());
  textFont(customFont);
  fill(255, 255, 255); // <----- Changez cette valeur pour manipuler la couleur du texte
  textSize(36);
  text(time, width/2, height/2);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
// -----------------------------------//
