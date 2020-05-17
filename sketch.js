const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var ball
var ground
var holder
var engine
var world;
var chain;
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,10,options)
  World.add(world,ground)
var options1={
    isStatic:true
  }
  holder=Bodies.rectangle(100,100,150,10,options1)
  World.add(world,holder)

  var options2={
     restitution:1
  }
  ball=Bodies.circle(100,100,30,options2)
  World.add(world,ball)

  var options3={
    bodyA: holder,
    bodyB: ball,
    length: 50,
    stiffness:0.05
    
   
  }
  chain=Constraint.create(options3)
  World.add(world,chain)
}



function draw() {
  background("black");  
  Engine.update(engine)
  fill ("Blue")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
  rect(holder.position.x,holder.position.y,150,10)
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  stroke("yellow")
   line (holder.position.x,holder.position.y,ball.position.x,ball.position.y)

   if(keyCode===32){
     ball.position.x=mouseX
     ball.position.y=mouseY
   }
   if(keyCode===ENTER){
     ball.position.x=100
     ball.position.y=150

   }

}