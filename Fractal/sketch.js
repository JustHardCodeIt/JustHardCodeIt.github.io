
var angle = 0;
var slider;
var level;
var currentStoke;



function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);

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


