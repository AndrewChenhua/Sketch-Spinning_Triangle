let Frame_Count = 0;
let Total_Frame = 2000;
let triangleArray;

let circleArray = new Array(60);

let circles_x = new Array(60);
let circles_y = new Array(60);

let r;
let Outsidelayer = 70;
let circleHeight;

let rotationAngle = 0.0;
let Spin = 0.00001;
let degree = 0.02;

function setup() {
  createCanvas(circleArray.length * 18, 540);
  noFill();
  stroke(255);
  strokeWeight(0.5);

  circleArray = new Array(60).fill(0).map((_, i) => i * 60);
}

function draw() {
  background(0);
  drawingCircle();
  drawingTriangle();
  increasingAngle();
}

function drawingCircle() {
  for (let i = 0; i < circleArray.length; i++) {
    ellipse(circles_x[i], circles_y[i], r, r);
  }
}

function drawingTriangle() {
  // Implement the logic for drawing triangles
}

function increasingAngle() {
  rotationAngle += Spin;
  // Implement the logic for increasing the angle
}

function drawingCircle() {
  for (let circleHeight = 30; circleHeight < height; circleHeight += 60) {
    for (let i = 0; i < circleArray.length; i++) {
      for (let r = 10; r < Outsidelayer; r += 10) {
        ellipse(circleArray[i] + 30, circleHeight, r);
        ellipse(circleArray[i] + 30, circleHeight, 4);
      }
    }
  }
}

function drawingTriangle() {
  for (let circleHeight = 30; circleHeight < height; circleHeight += 60) {
    for (let i = 0; i < circleArray.length; i++) {
      fill(255, 200);
      push();
      let distanceToMouse = dist(
        mouseX,
        mouseY,
        circleArray[i] + 30,
        circleHeight
      );

      let speedMultiplier = map(distanceToMouse, 0, width, 0, 200) * degree;
      translate(circleArray[i] + 30, circleHeight);
      let rotationSpeed = 1 * speedMultiplier;
      rotationAngle += Spin;
      let a = rotationAngle;
      rotate(a + rotationSpeed);

      triangle(-15 * Math.sqrt(3), -15, 0, 0, 15 * Math.sqrt(3), -15);

      pop();
    }
    noFill();
  }
}
