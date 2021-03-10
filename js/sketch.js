let customFont; // Ne pas toucher à cette ligne

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
}
// ---------------------------------- s//

function setup() {
  createCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
  rectMode(CENTER);
  
  
  
}

function draw() {
  map (second(), 0, 59, 0, 1);

  background(0, 0, 0);
  showTime(); // Ne pas toucher à cette ligne
  rect (second(), width * second(), height/2, 30, 30);
   
  
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
  text(time, 20, height - 20);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
// -----------------------------------//
