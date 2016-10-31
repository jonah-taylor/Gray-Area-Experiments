// Where is the circle
var x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Starts in the bottom left
  x = 0;
  y = windowHeight;
}

function draw() {
  background(255);
  
  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);
  
  // Moving up to the left at a constant speed
  x = x + 1;
  y = y - 1;
  
}