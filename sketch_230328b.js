//Ariana Majid
//Nicholas Brown-Hernandez 
//Web & FX section 3
//Mood Swings
//https://openprocessing.org/sketch/1874501

//instructions: drag mouse pad to make circles move
// click MousePad to make circles change colours
// click right or left bottons on KeyPad to make circles fade

//Statement: circular caterpilar is going through mood swings and feeling many different emotions. your job is to put it to sleep by fading it.

//assisted by ChatGPT
let pastelColor;
let alpha = 255; // initial alpha value

function setup() {
  createCanvas(1000, 1000);
  background(100);
  frameRate(20);
  pastelColor = generatePastelColor(); // generate an initial pastel color
}

function generatePastelColor() {
  let r = random(200, 255);
  let g = random(200, 255);
  let b = random(200, 255);
  return color(r, g, b, alpha); // include alpha value in the color
}

function draw() {
  let cSize = random(100);
  noStroke();
  fill(pastelColor);
  circle(mouseX, mouseY, cSize);
}

function mouseClicked() {
  pastelColor = generatePastelColor(); // generate a new pastel color when mouse is clicked
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    alpha -= 10; // decrease alpha to make circle fade slowly
    if (alpha < 0) {
      alpha = 0;
    }
    pastelColor = color(red(pastelColor), green(pastelColor), blue(pastelColor), alpha); // update pastel color with new alpha value
  }
}
