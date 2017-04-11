
var Mic;
var amp;
function setup() {
	Mic = new p5.AudioIn();
	Mic.start();
	createCanvas(710, 400);
	amp = new p5.FFT();
	amp.setInput(Mic);
}

function draw() {
	var spectrum = amp.analyze();
  	background(0);
  	beginShape();
  	noFill(0);
  	stroke(255);

  	var half = height/2;

  	for(var x = 0; x < spectrum.length; x++){
  		 if(spectrum[x] < 0) spectrum[x] = 1;
  		 vertex(x, half + map(spectrum[x], 0, 255, 0, height) );
  		 vertex(x, half - map(spectrum[x], 0, 255, 0, height) );

  	}
  	endShape();

  	

  	
}