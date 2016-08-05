var r=10;
var g=0;
var b=255;

function circle (x,y,diameter) {
ellipse (x,y,diameter,diameter);
}

function setup() {
  createCanvas(600,600);
  background(50);
}

function draw() {
  noStroke();
  fill(r,g,b);
  circle(mouseX,mouseY,100);
  r=r+.5;
  b=b-.1;

  if (r>255) {
  fill(255,0,0);
  noStroke ();
}
  if (b<0) {
  fill(0,255,0);
  noStroke ();
}

if (mouseIsPressed) {
  fill(255,255,255);
  circle(mouseX, mouseY, 100);
}

if (mouseIsPressed==false) {
  fill (r,g,b);
}
}