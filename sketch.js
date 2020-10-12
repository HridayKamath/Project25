
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper;
var bin,binImage;
var b1,b2,b3;

function preload()
{
	
}

function preload(){

	binImage = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	var ground_options ={
        isStatic: true
	}
	
	var bucket_options ={
        isStatic: true
    }


    ground = Bodies.rectangle(100,690,2000,10,ground_options);
    World.add(world,ground);

	var ball_options ={
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2

	}

	paper = new Paper(130,300,10,10);

	b1 = new Bin(600,635,10,60);
	b2 = new Bin(680,635,10,60);
	b3 = new BaseBin(640,635,130,150);
	


	
	//paper = Bodies.circle(80,670,15,ball_options);
	//World.add(world,paper);
	

	/*b1 = Bodies.rectangle(580,635,10,60,bucket_options);
	World.add(world,b1);

	b2 = Bodies.rectangle(700,635,10,150,bucket_options);
	World.add(world,b2);

	b3 = Bodies.rectangle(640,680,120,100,bucket_options);
	World.add(world,b3);*/

  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  paper.display();
  b1.display();
  b2.display();
  b3.display();

  fill("yellow");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,2000,10);

  /*ellipseMode(RADIUS);
  fill("red");
  stroke ("red");
  ellipse(paper.position.x, paper.position.y, 15, 15);*/

  

  keyPressed();
  
  drawSprites();

  fill("white");
  stroke("white");
  rectMode(CENTER);
  /*rect(b1.position.x,b1.position.y,10,100);
  rect(b2.position.x,b2.position.y,10,100);
  rect(b3.position.x,b3.position.y,120,10);*/

  
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){ 
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
	
}

