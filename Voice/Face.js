
var Mic;
var volume;
function setup() {
	Mic = new p5.AudioIn();
	Mic.start();
	createCanvas(400, 400);
}

function draw() {
  	background(51);
  	volume = Mic.getLevel();
  	ellipse ((width/2) - 40, (height/2) - 60, 30, 30);
  	ellipse ((width/2) + 40, (height/2) - 60, 30, 30);
  	ellipse(width/2, height/2, 80, 10 +(volume * 500));
}