
var fixedRect, movingRect;
var a,b,c,d;

function setup() {
  createCanvas(1200,800);
 
 
  a = createSprite(800, 400,80,30);
  a.shapeColor = "green";

  b = createSprite(100, 100, 50, 50);
  b.shapeColor = "green";
  
  c=createSprite(700,400,80,30);
  c.shapeColor="green";

  d=createSprite(600,400,80,30);
  d.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;

  if(isTouching(c,b)){
    c.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  
  else {
    c.shapeColor = "green";
  
    b.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




