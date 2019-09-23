var rain = [];
var numDrops = 1000;

function setup(){
  createCanvas(800, 800);

  for (var i = 0; i < numDrops; i++) {
    rain[i] = new Drop;
  }
}

function draw(){
  background(0);

  for (var i = 0; i < rain.length; i++) {
    rain[i].fall();
    rain[i].show();
  }
}
