//JasminePrice - 405 - Creative Coding Project

//Setup of variables
let circleArray = [];
let arraySize = 6;

function setup(){
  var canvas = createCanvas(594, 841); //Use this function to define the size of the output window
  canvas.parent("myContainer");
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(random(0, 594), 0, 0.02, random(0.01, 0.08), random(10, 70), random(3, 4));
  }
}

function draw(){
  fill(0, 10);
  rect(0, 0, width, height);
  //background(0);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

class Circle{
    constructor(x, y, angleX, freq, size, speed){
      this.x = x;
      this.y = y;
      this.angleX = angleX;
      this.freq = freq;
      this.size = size;
      this.speed = speed;

      this.rd = random(255);
      this.grn = random(255);
      this.bl = random(255);
      this.a = 255;
    }


// The function that controls the movement of the ball
moveFunction(){
  this.y = this.y + this.speed; //Add +1 pixel to the position of x (for every frame)
  //console.log(x);
  //If the position of the ellipse reaches the limit of the canvas,
  //then reset its position to 0 - ellipse appears from the top again
  this.angleX+=this.freq; // speed of the wave
  this.sinValue = sin(this.angleX);
  this.mapSin = map(this.sinValue, -1, 1, -50, 50); // amplitude

  //this.sinValue2 = sin(this.angleX);
  //this.mapSin2 = map(this.sinValue2, -1, 1, 50, -50);

  //let this.currentTime = millis();


  if (this.y > 866){ //866 comes from 841 (height) + 25 (half size of ellipse)
    this.rd = random (255);
    this.grn = random (255);
    this.bl = random (255);
    this.a = 255;
    this.size = (random(10, 50));
    this.x = random(0, 594);
    this.y = -25; //instead reset to 0, we reset to 0-25 (half size of ellipse)
  }

  //console.log(x+mapSin);
  //We only change the position of x (y is static to middle)
}
// The function that displays and controls the ellipse parameters
displayCircle(){
  noStroke();
  this.fillcol = color(this.rd, this.grn, this.bl, this.a)
  fill(this.fillcol);
  ellipse(this.x+this.mapSin, this.y, this.size, this.size);
  //ellipse(this.x+this.mapSin2, this.y, this.size, this.size);
}
}
