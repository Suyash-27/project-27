var sling1,sling2,sling3,sling4,sling5;
var weight1,weight2,weight3,weight4,weight5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    weight1 = new Weight(150,300,40,40);   
	weight2 = new Weight(150,300,40,40);  
	weight3 = new Weight(150,300,40,40);  
	weight4 = new Weight(150,300,40,40);  
	weight5 = new Weight(150,300,40,40);  

	sling1 = new Sling(weight1,{x:150,y:400});
	sling2 = new Sling(weight1,{x:250,y:400});
	sling3 = new Sling(weight1,{x:350,y:400});
	sling4 = new Sling(weight1,{x:450,y:400});
	sling5 = new Sling(weight1,{x:550,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



