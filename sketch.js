let pos, target

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Initialize pos and target variables
  // pos holds the current position of the ellipse
  pos = width / 30;
  // target holds the end position of the ellipse
  target = width;
}

function draw() {
  background(0, 15);
  noStroke();
  fill(255, 0, 0);
  // Calculate lerp value from pos to target
  // Increases 2 percent every loop
  pos = lerp(pos, target, 0.02);
  ellipse(pos, height / 2, width / 15, width / 15);

  fill(255, 0, 255);
  ellipse(pos, height / 4, width / 15, width / 15);

  fill(0, 255, 255);
  ellipse(pos, height / 1.33, width / 15, width / 15);

  // Set target back to 0 when the ellipse reaches the right side of the canvas
  if(pos > width - width / 20){
    target = 0;
  }
  
  // Set target back to width when the ellipse reaches the left side of the canvas
  if(pos < width / 30){
    target = width;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}