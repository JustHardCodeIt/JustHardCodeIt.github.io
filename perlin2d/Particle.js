function Particle(){
	this.pos = createVector(random(width), random(height));
	this.vel = createVector	(0, 0);
	this.acc = createVector	(0, 0);
	this.maxSpeed = 4;

	this.rseed = random(1000);
	this.gseed = random(1000);
	this.bseed = random(1000);






	this.update = function	(){
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.applyForce = function (force){
		this.acc.add(force);
	}

	this.show = function	(r, g, b, weight, alpha){
		
		this.rseed += .01;
		this.bseed += .01;
		this.gseed += .01;
		
		this.r = r;
		this.b = g;
		this.g = b;
		this.weight = weight;
		this.alpha = alpha;

		stroke(this.r, this.b, this.g, this.alpha);
		strokeWeight(this.weight);
		point(this.pos.x, this.pos.y);
	}


	this.edges = function(){
		if(this.pos.x > width) this.pos.x = 0;
		if(this.pos.x < 0) this.pos.x = width;
		if(this.pos.y > height) this.pos.y = 0;
		if(this.pos.y < 0) this.pos.y = height;
	}

	this.follow = function(flowField){
			var x = floor(this.pos.x / scl);
			var y = floor(this.pos.y / scl);
			var index = x + y * cols;
			var force = flowField[index];
			this.applyForce	(force);	
	}
}