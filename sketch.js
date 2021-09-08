var ball
var ground,leftSide,rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,height-20,width,50)
    leftSide = new Ground(900,595,20,120)
	rightSide = new Ground(1100,595,20,120)

    ball = new Ball(200,height-30,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  push()
  fill("yellow")
  leftSide.display()
  rightSide.display()
  pop()
  ball.display()
  drawSprites();
 
}

function keyReleased(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}