var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 40);
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  if(wall.x-bullet.x<(bullet.width+wall.width/2))
  {
    bullet.velocityX=0;
    var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=(red);
    }
    if(damage<10)
    {
      wall.shapeColor=(green);
    }
  drawSprites();
}