const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];

function setup() {
  createCanvas(490,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(245,784,500,15);
  redWall = new Wall(490,400,10,810)
  redGround = new Wall(245,800,500,20);
  
  division1 = new Division(0,630,10,300)
  division2 = new Division(80,630,10,300)
  division3 = new Division(160,630,10,300)
  division4 = new Division(240,630,10,300)
  division5 = new Division(320,630,10,300)
  division6 = new Division(400,630,10,300)
  division7 = new Division(480,630,10,300)

  for(var j = 40; j <=490; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <=490-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for(var j = 40; j <=490-20; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}

for(var j = 15; j <=490-30; j=j+50)
{
  plinkos.push(new Plinko(j,375));

}
}
function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  redWall.display();
  redGround.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

for(var k = 0; k<particles.length;k++){
particles[k].display();
}
  
for(var j = 0; j < plinkos.length;k++){
  plinkos[j].display();
}
  
  


  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    
  }
}