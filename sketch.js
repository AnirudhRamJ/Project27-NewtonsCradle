const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  // Create the Bodies Here
  roof1 = new Roof(400, 100, 600, 20);
  bob1 = new Bob(290, 300, 35);
  rope1 = new Rope(bob1.body, { x: 290, y: 100 });

  bob2 = new Bob(360, 300, 35);
  rope2 = new Rope(bob2.body, { x: 360, y: 100 });

  bob3 = new Bob(430, 300, 35);
  rope3 = new Rope(bob3.body, { x: 430, y: 100 });

  bob4 = new Bob(500, 300, 35);
  rope4 = new Rope(bob4.body, { x: 500, y: 100 });

  bob5 = new Bob(570, 300, 35);
  rope5 = new Rope(bob5.body, { x: 570, y: 100 });

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("blue");
  text(mouseX + " " + mouseY, mouseX, mouseY);

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -30, y: -30});
  }
}