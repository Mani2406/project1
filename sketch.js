
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground1, container1, container2, container3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(220,420,30);
    ground1 = new Ground(450,700,900,10);
    container1 = new container(450,710,10,100);
    container2 = new container(675,710,50,10);
    container3 = new container(675,710,10,100);
    


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  container1.display();
  container2.display();
  container3.display();

  
  
 
}

function keyPressed() {

  if(keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body, paper1.body.position,{x:200,y:200});
  }
}



