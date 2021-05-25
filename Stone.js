class Stone{
	constructor(x,y)
	{
		var options = {
			'density': 12,
			'friction': 3,
			'restitution': 0.5
		  }

          this.body=Bodies.rectangle(x, y, 40, 40, options)
          this.width = 60;
          this.height = 60;
		World.add(world, this.body);

	}
	display()
	{
			var pos =this.body.position;	

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0, 0, this.width, this.height);
			pop()
	}

}
