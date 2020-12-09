var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(displayWidth -20,displayHeight -30);
  speed=random(223,321);
  thickness=random(23,83)
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  wall=createSprite(900,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
   background("black");  
if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
var Damage=0.5*weight*speed*speed/(thickness  * thickness  * thickness);



     if (Damage > 10){
     wall.shapeColor=color(255,0,0);
     }
    
    if (Damage < 10 ){
      wall.shapeColor=color(0,255,0);



    }
  }




  drawSprites();
}


function hasCollided(bulletd,walld){
   bulletrightedge=bulletd.x+walld.width;
   wallleftedge=walld.x;
   if (bulletrightedge >= wallleftedge){
  return true;




   }
   return false;





}