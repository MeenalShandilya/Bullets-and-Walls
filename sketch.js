var bullet, wall, speed, weight, thickness, damage;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1000,400);
  
  car = createSprite(200,200,50,10);
  bullet.velocityX=speed;
  car.shapeColor="white";
  
  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor="#A52A2A";

  speed = random(50,100);
  weight = random(400,1500);
  thickness = random(22,83);
}

function draw() {
  background("skyblue");  
  hasCollided();

 if (collide(wall,bullet)) {

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet.velocityX=0;

  if (damage<10) {
    wall.shapeColor="green";
    textSize(20);
    fill("green");
    textFont("Impact");
    text("The wall is effective against the bullet.",350,150);
  }
  if (damage>10) {
    wall.shapeColor="red";
    textSize(20);
    fill("red");
    textFont("Impact");
    text("The wall is not effective against the bullet.",350,150);
   }
 }
  drawSprites();
}
function hasCollided() {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
    }  else {
      return false;
    }
}