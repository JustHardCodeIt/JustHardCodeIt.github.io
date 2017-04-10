var xOffset = 0;
var inc = 0.01;
var start = 0;

var Slider;

function setup() {
	createCanvas(400, 400);
	Slider = createSlider(0, 1, 1);
}

function draw() {

 background(51);
 noFill();



beginShape();
var xOffset = start;
for(var x = 0; x < width; x++){
  
 var y = noise(xOffset) * height;
stroke(255);	
strokeWeight(map(noise(xOffset), 0, 1, 1, 255) * 2);
 vertex(x, y);

 xOffset += inc;
}
endShape();

start += inc;
//clear();
//noLoop();
}

