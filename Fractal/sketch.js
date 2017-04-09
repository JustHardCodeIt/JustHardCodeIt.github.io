
var angle = 0;
var slider;
var level;
var currentStoke;

var button;


function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
  button = createButton('Random');
  button.mousePressed() = function stuff(){
  	rotate = randomRotation();
  }
}

function draw() {
  background(51);
  angle = slider.value();
  var len = 100;
  translate(200, height)
  currentStoke = 255;
  stroke(currentStoke);
  branch(len);
  
}

function branch(len){
	line(0, 0, 0, -len);
	translate(0, -len);
	level++;
	stroke(currentStoke/level);	
  	if(len > 4){
  		push();
    	rotate(angle);
    	branch(len * 0.67);
    	pop();
    	rotate(-angle)
    	branch(len * .67);
  }
}


function randomRotation(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
