class iron{
	constructor(x,y)
	{
		var options = {
			'density': 30,
			'friction': 3,
			'restitution': 1.5
		  }

          this.body=Bodies.rectangle(x, y, 40, 40, options)
          this.width = 30;
          this.height = 40;
		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;	

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("red");
			rect(0, 0, this.width, this.height);
			pop()
	}

}
