const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(400,600,800,20)

  polygon = new Polygon(103,276,10,10)
  ground2 = new Ground(392,253,200,40)
  ground3 = new Ground(571,441,200,40)
  box1 = new Box(330,235,30,40)
  box2 = new Box(360,235,30,40)
  box3 = new Box(390,235,30,40)
  box4 = new Box(420,235,30,40)
  box5 = new Box(450,235,30,40)
  box6 = new Box(360,191,30,40)
  box7 = new Box(390,191,30,40)
  box8 = new Box(420,191,30,40)
  box9 = new Box(390,151,30,40)
  box10 = new Box(510,416,30,40)
  box11 = new Box(540,416,30,40)
  box12 = new Box(570,416,30,40)
  box13 = new Box(600,416,30,40)
  box14 = new Box(630,416,30,40)
  box15 = new Box(540,382,30,40)
  box16 = new Box(570,382,30,40)
  box17 = new Box(600,382,30,40)
  box18 = new Box(570,340,30,40)
  slingshot = new SlingShot(polygon.body, {x:16, y:267})
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("orange");
  ground1.display();
  polygon.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  slingshot.display();
 fill("grey")
 stroke("red")
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly();
}