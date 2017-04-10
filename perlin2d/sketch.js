
var inc = 0.1;
var scl = 10;
var cols, rows;

var flowField;


var zOff = 0;

var fr;

var particles = [];


var rSLider;
var bSlider;
var gSLider;
var wSLiderl
var aSlider;


function setup() {
	createCanvas(400, 400);
	background(255);

	cols = floor(width / scl);
	rows = floor(height / scl);
	fr = createP('');

	flowField = new Array(cols * rows);

	for(var i = 0; i < 300; i++){
		particles[i] = new Particle();
	}


	rSLider	= createSlider(0, 255, 1);
	text("Red", rSLider.x * 2 + rSLider.width, rSLider.y);
	bSLider	= createSlider(0, 255, 1);
	text("Blue", bSLider.x * 2 + bSLider.width, rSLider.y);
	gSLider	= createSlider(0, 255, 1);
	wSLider	= createSlider(0, 255, 1);
	aSLider	= createSlider(0, 255, 1);


	
	
	
}

function draw() {

	var yOff = 0;
	

	for(var y = 0; y < rows; y++){
		var xOff = 0;
		for(var x = 0; x < cols; x++){
			var index = x + y * cols;
			var r = noise(xOff, yOff) * 255;



			var angle = noise(xOff, yOff, zOff) * TWO_PI * 4;

			var v = p5.Vector.fromAngle(angle);
			v.setMag(5);
			flowField[index] = v;				
			xOff += inc;
			strokeWeight(4);
			stroke(0, 50);
			push();
			translate(x * scl, y * scl);
			rotate(v.heading());
			strokeWeight(1);
			//line(0, 0, scl, 0); 
			pop();
		}
		yOff += inc;

		zOff += .0004;

	}

	for(var i = 0; i < particles.length; i++){
		particles[i].follow(flowField);
		particles[i].update();
		particles[i].show(rSLider.value(), bSLider.value(), gSLider.value(), wSLider.value(), aSLider.value());
		particles[i].edges();

	}
	fr.html(floor(frameRate()));

}

