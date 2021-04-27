const Bodies=Matter.Bodies
const World = Matter.World
const Engine= Matter.Engine

var engine,world,ground,ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  ground=Bodies.rectangle(400,390,800,10,{isStatic:true})
  World.add(world,ground)
  ball=Bodies.circle(400,100,50,{restitution:1})
  World.add(world,ball)
  console.log(ground)
}

function draw() {
  background(0);  
  Engine.update(engine)
 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)
}