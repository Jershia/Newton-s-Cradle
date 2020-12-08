
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter = 20;
function setup() {
  createCanvas(1000, 500);
  rectMode(CENTER)
	engine = Engine.create();
  world = engine.world;
   bob1 = new Bob(500,350,50)
   bob2 = new Bob(550,350,50)
   bob3 = new Bob(600,350,50)
   bob4 = new Bob(450,350,50)
   bob5 = new Bob(400,350,50)
   roof = new Roof(500,100,450,40)
   chain = new Rope(bob1.body,roof.body,0,0);
   chain1 = new Rope(bob2.body,roof.body,50,0);
   chain2 = new Rope(bob3.body,roof.body,100,0);
   chain3 = new Rope(bob4.body,roof.body,-50,0);
   chain4 = new Rope(bob5.body,roof.body,-100,0);
  }
function draw() {
  Engine.update(engine)
 rectMode(CENTER)
  background("yellow");
  drawSprites();
  chain.display();
  chain1.display();
  chain2.display();
  bob3.display();
  chain3.display();
  chain4.display();
  bob5.display();
  bob4.display();
  bob1.display();
  bob2.display();
  roof.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
 Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-150,y:150})
}
}



