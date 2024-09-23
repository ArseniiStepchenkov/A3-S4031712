let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, width, height, 0, 0, capture.width, capture.height, COVER);
  filter(THRESHOLD);
  filter(INVERT);
}

function comeBack(){
  window.location.href = "index.html";
}