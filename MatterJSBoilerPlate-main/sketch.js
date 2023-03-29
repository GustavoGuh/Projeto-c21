
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options = {
    isStatic:false,
    restitution:0.3,
	friction:0,
	density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
  ball = Bodies.circle(100, 10, 20, ball_options);
  
  World.add(world, ball);

	Engine.run(engine);
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {



  }
	
}
function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();

  groundObj=new ground(width/2,670,width,20);
  liftSide = new ground(1100,6,2,12);
  
  drawSprites();
 
}



