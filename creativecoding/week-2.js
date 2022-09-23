
//try writing code (don't copy it) in chrome developer tools 
//on mac the menu dive is View/Developer/Developer Tools

//developer tools example 1 iteration using for loop
for(i=0;i<10;i++){
console.log(i)
}

//developer tools example 2 while loop
while (i < 10) {
  text += "The number is " + i;
  i++;
}

//developer tools example 3 forever loop
while (true == true) {
console.log('forever');
}

//these following p5.js examples can be tried out in https://editor.p5js.org/

//p5.js example 1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(i=0;i<100;i++){
    ellipse(i,i,mouseX, mouseY)
  }
}

//p5.js example 2
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(102);
  push();
  translate(width * 0.5, height * 0.5);
  //rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    //vertex(sx, sy);
    ellipse(sx,sy,50,50)
  }
  //endShape(CLOSE);
}



