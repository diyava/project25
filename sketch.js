
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj;

// preload(){
 //   bgImg=loadImage("sprites/bg.png")
//}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new Paper(90,580,70,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

 drawSprites()

}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:1500,y:-2100})
	}
}
