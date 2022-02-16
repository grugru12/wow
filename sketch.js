function setup() {
  createCanvas(700, 1244);
}

function preload() {
  i1 = loadImage("image/i 1.jpg");
}

function draw() {
  background(220);
    image(i1, 0, 0, width, height);
}