//JasminePrice - 405 - Creative Coding Project

//Setup of variables
let x;
let y;
let ellipseSize;
let angleX = 0;
let sinValue;
let mapSin;
let sinValue2;
let mapSin2;
let r, g, b = (255); //Initialize r,g,b each to 255

function setup(){
  var canvas = createCanvas(594, 841); //Use this function to define the size of the output window
  canvas.parent("myContainer");
  x = width/2;
  y = 0;
  ellipseSize = (random(10, 50));
  r = random (255);
  g = random (255);
  b = random (255);
  noStroke();
}

function draw(){
  fill(160, 10);
  rect(0, 0,width, height);
  //background(0);
  move();
  show();
}
// The function that controls the movement of the ball
function move(){
  y = y + 1; //Add +1 pixel to the position of x (for every frame)
  //console.log(x);
  //If the position of the ellipse reaches the limit of the canvas,
  //then reset its position to 0 - ellipse appears from the left again
  if (y > 841){ //425 comes from 400 (width) + 25 (half size of ellipse)
    r = random (255);
    g = random (255);
    b = random (255);
    ellipseSize = (random(10, 50));
    y = -25; //instead reset to 0, we reset to 0-25 (half size of ellipse)
  }
  angleX+=0.02; // speed of the wave
  sinValue = sin(angleX);
  mapSin = map(sinValue, -1, 1, -100, 100); // amplitude

  sinValue2 = sin(angleX);
  mapSin2 = map(sinValue2, -1, 1, 100, -100);

  console.log(x+mapSin);
  //We only change the position of x (y is static to middle)
}
// The function that displays and controls the ellipse parameters
function show(){
  fill(r, g, b);
  ellipse(x+mapSin, y, ellipseSize, ellipseSize);
  ellipse(x+mapSin2, y, ellipseSize, ellipseSize);
}
