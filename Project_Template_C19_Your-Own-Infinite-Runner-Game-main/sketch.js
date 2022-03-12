var Clouds,Bird, Trash, Fish
var CloudsImg,BirdImg, FishImg, TrashImg, endImg
var TrashGroup, fishGroup;
var Score = 0;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  BirdImg = loadAnimation("Bird2.png", "Bird1.png");
  CloudsImg = loadImage("Clouds.jpg");
  FishImg = loadImage ("Fish.png");
  TrashImg = loadImage ("Trash.png");
  endImg = loadImage ("End.png");
}

function setup(){
  

createCanvas(windowWidth,windowHeight);


Clouds=createSprite(width/2,200);
Clouds.addImage(CloudsImg);
Clouds.velocityY = 4;



Bird = createSprite(width/2,height-20,20,20);
Bird.addAnimation(Bird2.png, Bird1.png);
Bird.scale=0.08;
  
TrashGroup =new Group ();
fishGroup =new Group ();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  Bird.x = World.mouseX;
  
  edges= createEdgeSprites();
  Bird.collide(edges);
  
  

   if(Clouds.y > height ){
     Clouds.y = height/2;
   }
  
    createFish();
    createTrash();


    if (fishGroup.isTouching(Bird)) {
      fishGroup.destroyEach();
      Score = Score + 50;
    
    }else{
     if(TrashGroup.isTouching(Bird)) {
        gameState=END;
        
        Bird.addAnimation(endImg);
        Bird.x=width/2;
        Bird.y=height/2;
        Bird.scale=0.2;
        
        TrashGroup.destroyEach();
        fishGroup.destroyEach();
        
        TrashGroup.setVelocityYEach(0);
        fishGroup.setVelocityYEach(0);

     }
    }  
  
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Score "+ Score,width-150,30);

  }
}

function createFish () {
  if (World.frameCount % 200 == 0) {
  var Fish = createSprite(Math.round(random(50, width - 50),40, 10, 10))
  Fish.addImage(FishImg);
  Fish.scale = 0.5;
  Fish.velocityY = 7;
  Fish.lifetime = 200; 
  }
}

function createTrash(){
  if (World.frameCount % 530 == 0) {
  var Trash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Trash.addImage(TrashImg);
  Trash.scale=0.1;
  Trash.velocityY = 3;
  Trash.lifetime = 200;
  TrashGroup.add(Trash);
  }
}
