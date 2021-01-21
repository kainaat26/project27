
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,rope2,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(400,400,20);
	bobObject2 = new Bob(360,400,20);
	bobObject3 = new Bob(320,400,20);
	bobObject4 = new Bob(440,400,20);
	bobObject5 = new Bob(480,400,20);

roof = new Roof(400,200,200,10);
rope1 = new Rope(bobObject1.body,{x:400,y:200})
rope2 = new Rope (bobObject2.body,{x:360,y:200})
rope3 = new Rope (bobObject3.body,{x:320,y:200})
rope4 = new Rope (bobObject4.body,{x:440,y:200})
rope5 = new Rope (bobObject5.body,{x:480,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

 




  drawSprites();
 
}
function keyPressed(){
	if (keyCode === RIGHT_ARROW){
	  Matter.Body.applyForce(bobObject1.body,bobObject2.body.position,{x:10,y:-15})
	}
  }
  


