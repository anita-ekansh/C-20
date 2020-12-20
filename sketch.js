function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 80);
  a.shapeColor = "green";

  b = createSprite(200, 100,80,30);
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  a.x = World.mouseX;
  a.y = World.mouseY;

  console.log(a.y - b.y)

  if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 + b.width/2 && a.y - b.y < 55 && b.y - a.y < 55) {
  a.shapeColor = "red";
  b.shapeColor = "red";
  }
 
  else 
  {
  a.shapeColor = "green";
  b.shapeColor = "green";
  }
  drawSprites();
}