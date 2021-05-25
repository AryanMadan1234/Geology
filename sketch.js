const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,598,1200,10)
    plane2 = new Plane(2,height,10,1200)
    plane3 = new Plane(1197,height,10,1200)
   plane4 = new Plane(600,2,1200,10)

    hammer = new Hammer(10,100);

    rubberball1 = new Rubber (100,200,50)
    rubberball2 = new Rubber (400,200,50)
    rubberball3 = new Rubber (700,200,50)
    rubberball4 = new Rubber (1000,200,50)
 

    stone1 = new Stone(200,200)
    stone2 = new Stone(500,200)
    stone3 = new Stone(800,200)
    stone4 = new Stone(1100,200)
  

    Iron1 = new iron(300,400)
    Iron2 = new iron(600,400)
    Iron3 = new iron(900,400)
    Iron4 = new iron(1200,400)
   

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    plane2.display();
    plane3.display();
    plane4.display();

    hammer.display();

    rubberball1.display();
    rubberball2.display();
    rubberball3.display();
    rubberball4.display();
  
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
  
    Iron1.display();
    Iron2.display();
    Iron3.display();
    Iron4.display();
}